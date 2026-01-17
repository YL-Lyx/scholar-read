import React, { useState, useEffect } from 'react';
import { Book, Copy, Check, PenTool, Link as LinkIcon, Calendar, User } from 'lucide-react';
import { DocumentData } from '../types';

interface SidebarRightProps {
  document: DocumentData;
  notes: string;
  onNotesChange: (value: string) => void;
}

const SidebarRight: React.FC<SidebarRightProps> = ({ document, notes, onNotesChange }) => {
  const [copied, setCopied] = useState(false);

  // Reset copied state when document changes
  useEffect(() => {
    setCopied(false);
  }, [document.id]);

  const generateBibTeX = () => {
    const year = new Date(document.date).getFullYear();
    const key = `${document.author.split(' ').pop()}${year}${document.title.split(' ')[0]}`.toLowerCase();
    
    return `@article{${key},
  title={${document.title}},
  author={${document.author}},
  journal={${document.source}},
  year={${year}},
  note={Accessed via ScholarRead}
}`;
  };

  const handleCopyBibTeX = () => {
    navigator.clipboard.writeText(generateBibTeX());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside className="w-80 bg-gray-50 border-l border-gray-200 flex flex-col h-full flex-shrink-0">
      
      {/* Metadata Section */}
      <div className="p-5 border-b border-gray-200 bg-white">
        <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4">
          Metadata
        </h2>
        <div className="space-y-4">
            <div className="flex items-start space-x-3">
                <Book className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                    <span className="block text-xs text-gray-500 uppercase">Type</span>
                    <span className="text-sm font-medium text-gray-900">{document.type}</span>
                </div>
            </div>
            <div className="flex items-start space-x-3">
                <User className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                    <span className="block text-xs text-gray-500 uppercase">Author</span>
                    <span className="text-sm font-medium text-gray-900">{document.author}</span>
                </div>
            </div>
            <div className="flex items-start space-x-3">
                <Calendar className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                    <span className="block text-xs text-gray-500 uppercase">Publication Date</span>
                    <span className="text-sm font-medium text-gray-900">{document.date}</span>
                </div>
            </div>
            <div className="flex items-start space-x-3">
                <LinkIcon className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                    <span className="block text-xs text-gray-500 uppercase">Source</span>
                    <span className="text-sm font-medium text-indigo-600 hover:underline cursor-pointer">
                        {document.source}
                    </span>
                </div>
            </div>
        </div>
      </div>

      {/* BibTeX Tool */}
      <div className="p-5 border-b border-gray-200">
        <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
            BibTeX Citation
            </h2>
            <button 
                onClick={handleCopyBibTeX}
                className="text-xs flex items-center space-x-1 text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
            >
                {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
        </div>
        <div className="bg-gray-800 rounded-md p-3 relative group">
            <pre className="text-xs text-gray-300 font-mono whitespace-pre-wrap break-all overflow-hidden">
                {generateBibTeX()}
            </pre>
        </div>
      </div>

      {/* Notes Section */}
      <div className="flex-1 flex flex-col p-5 overflow-hidden">
        <div className="flex items-center space-x-2 mb-3">
            <PenTool className="w-4 h-4 text-gray-500" />
            <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Research Notes
            </h2>
        </div>
        <div className="flex-1 bg-yellow-50 border border-yellow-200 rounded-lg p-1 relative shadow-inner">
            <textarea
                className="w-full h-full bg-transparent p-3 resize-none focus:outline-none text-sm text-gray-800 leading-relaxed font-sans placeholder-gray-400"
                placeholder="Type your observations here..."
                value={notes}
                onChange={(e) => onNotesChange(e.target.value)}
                spellCheck={false}
            />
            <div className="absolute bottom-2 right-3 text-[10px] text-yellow-600/50 pointer-events-none">
                Auto-saved
            </div>
        </div>
      </div>

    </aside>
  );
};

export default SidebarRight;
