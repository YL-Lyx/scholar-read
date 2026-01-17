import { ExtractedFigure } from '../types';

/**
 * Simulates a computer vision/text analysis script that parses a PDF 
 * to find figures, captions, and their references.
 */
export const extractFiguresFromContent = (content: string): ExtractedFigure[] => {
  const figures: ExtractedFigure[] = [];
  
  // 1. Split content into paragraphs for context analysis
  const paragraphs = content.split('\n').filter(p => p.trim().length > 0);

  // 2. Regex to find "Figure X" patterns
  // Matches: "Figure 1:", "Figure 1.", "Figure 1 shows", "Figure 1 illustrates"
  const figureRegex = /Figure\s+(\d+)([:.]|\s+(?:shows|illustrates|depicts|displays|presents|compares))/i;

  paragraphs.forEach((paragraph, index) => {
    const match = paragraph.match(figureRegex);
    
    if (match) {
      const figureNumber = match[1];
      const isduplicate = figures.some(f => f.label === `Figure ${figureNumber}`);
      
      // Heuristic: If we haven't seen this figure number yet, or if this paragraph looks like a caption
      // (starts directly with Figure X), treat it as the primary definition.
      if (!isduplicate || paragraph.trim().startsWith(`Figure ${figureNumber}`)) {
        
        // Clean up the caption: limit length for UI
        let cleanCaption = paragraph.replace(figureRegex, '').trim();
        if (cleanCaption.startsWith(':') || cleanCaption.startsWith('.')) {
          cleanCaption = cleanCaption.substring(1).trim();
        }
        
        // If the paragraph was just "Figure 1 shows...", the "shows..." part is the caption context
        if (!cleanCaption && match[0]) {
             cleanCaption = paragraph.substring(match.index! + match[0].length).trim();
        }

        // Fallback if caption is too short or empty
        if (cleanCaption.length < 5) {
            cleanCaption = "Visual representation of the described concept.";
        }

        figures.push({
          id: `fig-${Date.now()}-${figureNumber}`,
          label: `Figure ${figureNumber}`,
          caption: cleanCaption,
          page: Math.floor(index / 3) + 1, // Simulate page number based on paragraph density
          context: paragraph
        });
      }
    }
  });

  // Sort by figure number
  return figures.sort((a, b) => {
    const numA = parseInt(a.label.replace('Figure ', ''));
    const numB = parseInt(b.label.replace('Figure ', ''));
    return numA - numB;
  });
};
