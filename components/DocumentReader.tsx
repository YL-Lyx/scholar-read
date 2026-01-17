import React from 'react';
import { ChevronDown, FileText, CloudDownload } from 'lucide-react';
import { DocumentData } from '../types';

interface DocumentReaderProps {
  selectedDoc: DocumentData;
  allDocuments: DocumentData[];
  onSelectDoc: (id: string) => void;
  onOpenImport: () => void;
}

const DocumentReader: React.FC<DocumentReaderProps> = ({ selectedDoc, allDocuments, onSelectDoc, onOpenImport }) => {
  return (
    <main className="flex-1 flex flex-col h-full overflow-hidden bg-gray-200">
      {/* Top Header / Navigation */}
      <header className="h-16 bg-white border-b border-gray-300 flex items-center justify-between px-6 shadow-sm z-10 flex-shrink-0">
        <div className="flex items-center space-x-2">
          <div className="p-1.5 bg-indigo-100 rounded-md">
            <FileText className="w-5 h-5 text-indigo-600" />
          </div>
          <span className="font-semibold text-gray-700 hidden sm:inline">
            ScholarRead
          </span>
        </div>

        {/* Center Dropdown */}
        <div className="relative group mx-4 flex-1 max-w-md flex justify-center">
          <div className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 transition-colors px-3 py-2 rounded-md cursor-pointer border border-gray-200 w-full max-w-xs justify-between">
            <span className="text-sm font-medium text-gray-700 truncate">
              {selectedDoc.title}
            </span>
            <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />
          </div>
          
          {/* Dropdown Menu */}
          <div className="absolute top-full mt-1 w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow-xl hidden group-hover:block z-50 overflow-hidden left-1/2 transform -translate-x-1/2">
            <div className="max-h-96 overflow-y-auto py-1">
              {allDocuments.map((doc) => (
                <button
                  key={doc.id}
                  onClick={() => onSelectDoc(doc.id)}
                  className={`w-full text-left px-4 py-3 hover:bg-indigo-50 transition-colors border-l-4 ${
                    selectedDoc.id === doc.id
                      ? 'border-indigo-600 bg-indigo-50'
                      : 'border-transparent'
                  }`}
                >
                  <p className="text-sm font-semibold text-gray-800 truncate">
                    {doc.title}
                  </p>
                  <div className="flex justify-between items-center mt-0.5">
                     <p className="text-xs text-gray-500 truncate max-w-[150px]">{doc.author}</p>
                     {doc.type === 'Notebook Extract' && (
                        <span className="text-[10px] bg-green-100 text-green-700 px-1.5 rounded-sm">Imported</span>
                     )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div>
            <button 
                onClick={onOpenImport}
                className="flex items-center space-x-2 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition-all shadow-sm active:scale-95"
            >
                <CloudDownload className="w-4 h-4" />
                <span className="hidden md:inline">Connect Notebook</span>
            </button>
        </div>
      </header>

      {/* Document Content Scrollable Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-8 lg:p-12 scroll-smooth">
        <div className="max-w-3xl mx-auto bg-white shadow-lg min-h-full px-8 py-12 sm:px-12 sm:py-16 border border-gray-200">
          
          {/* Document Title Header on Paper */}
          <div className="mb-10 text-center border-b pb-8 border-gray-100">
            <h1 className="text-3xl sm:text-4xl font-serif-academic font-bold text-gray-900 mb-4 leading-tight">
              {selectedDoc.title}
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center text-sm text-gray-500 space-y-2 sm:space-y-0 sm:space-x-6">
              <span className="font-medium text-indigo-700">{selectedDoc.author}</span>
              <span className="hidden sm:inline">&bull;</span>
              <span>{selectedDoc.date}</span>
              <span className="hidden sm:inline">&bull;</span>
              <span>{selectedDoc.source}</span>
            </div>
          </div>

          {/* Actual Text Content */}
          <article className="prose prose-slate prose-lg max-w-none font-serif-academic text-gray-800 leading-relaxed">
            {selectedDoc.content.split('\n').map((paragraph, idx) => {
              const trimmed = paragraph.trim();
              if (!trimmed) return <br key={idx} />;
              
              // Simple heuristic to detect headers in the mock text (e.g., "1. Introduction")
              const isHeader = /^(Abstract|Introduction|Conclusion|\d+\.|Key Parameters|Overview|Executive Summary|Bell's Inequality|Applications|Future Directions|The Perceptron|Gradient Descent)/.test(trimmed);

              if (isHeader) {
                return (
                  <h3 key={idx} className="text-xl font-bold text-gray-900 mt-8 mb-4">
                    {trimmed}
                  </h3>
                );
              }

              return (
                <p key={idx} className="mb-4 text-justify">
                  {trimmed}
                </p>
              );
            })}
          </article>

          {/* Footer visual element */}
          <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between text-xs text-gray-400 font-sans">
            <span>Page 1 of 1</span>
            <span>Generated by ScholarRead</span>
          </div>
        </div>
        
        {/* Spacer for bottom scrolling */}
        <div className="h-16"></div>
      </div>
    </main>
  );
};

export default DocumentReader;
