import React, { useMemo } from 'react';
import { Image, XCircle, Search } from 'lucide-react';
import { DocumentData } from '../types';
import { extractFiguresFromContent } from '../utils/pdfProcessor';

interface SidebarLeftProps {
  document: DocumentData;
}

const SidebarLeft: React.FC<SidebarLeftProps> = ({ document }) => {
  // Automatically extract figures using the "script" when document changes
  const extractedFigures = useMemo(() => {
    return extractFiguresFromContent(document.content);
  }, [document.content]);

  const hasFigures = extractedFigures.length > 0;

  return (
    <aside className="w-72 bg-gray-50 border-r border-gray-200 flex flex-col h-full flex-shrink-0 transition-all duration-300">
      <div className="p-4 border-b border-gray-200 bg-white flex justify-between items-center">
        <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
          Extracted Figures
        </h2>
        <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">
            {extractedFigures.length}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {hasFigures ? (
          extractedFigures.map((fig) => (
            <div
              key={fig.id}
              className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
            >
              <div className="bg-gray-100 rounded-md h-32 flex items-center justify-center mb-3 group-hover:bg-gray-200 transition-colors relative overflow-hidden">
                <Image className="text-gray-400 w-8 h-8 z-10" />
                {/* Simulated image placeholder pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_#000_1px,_transparent_1px)] bg-[length:10px_10px]"></div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                    <h3 className="text-sm font-bold text-gray-800">{fig.label}</h3>
                    <span className="text-[10px] text-gray-400">Pg {fig.page}</span>
                </div>
                <p className="text-xs text-gray-600 line-clamp-3 leading-snug">
                  {fig.caption}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center p-6 text-gray-400">
            <div className="relative">
                <XCircle className="w-12 h-12 mb-3 opacity-20" />
                <Search className="w-5 h-5 absolute -bottom-1 -right-1 text-gray-300 bg-gray-50 rounded-full p-0.5" />
            </div>
            <p className="text-sm font-medium">No figures detected</p>
            <p className="text-xs mt-1 max-w-[150px]">
                Our script analyzed the text but found no "Figure X" references.
            </p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default SidebarLeft;
