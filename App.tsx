import React, { useState } from 'react';
import SidebarLeft from './components/SidebarLeft';
import DocumentReader from './components/DocumentReader';
import SidebarRight from './components/SidebarRight';
import ImportModal from './components/ImportModal';
import { documents as initialDocuments, importedDocuments } from './data/mockDocuments';
import { NotesMap, DocumentData } from './types';

const App: React.FC = () => {
  // State for all documents (initially just the default ones)
  const [allDocs, setAllDocs] = useState<DocumentData[]>(initialDocuments);

  // State for the currently active document ID
  const [activeDocId, setActiveDocId] = useState<string>(initialDocuments[0].id);

  // State for storing notes for each document (keyed by document ID)
  const [notes, setNotes] = useState<NotesMap>({});

  // State for Import Modal
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);

  // Helper to get the full object of the active document
  const activeDocument = allDocs.find((doc) => doc.id === activeDocId) || allDocs[0];

  // Handler to update notes for the specific document
  const handleNotesChange = (newNote: string) => {
    setNotes((prevNotes) => ({
      ...prevNotes,
      [activeDocId]: newNote,
    }));
  };

  // Handler for successful import from NotebookLM
  const handleImportSuccess = () => {
    // Merge new documents
    setAllDocs(prev => [...prev, ...importedDocuments]);
    // Switch to the first imported document
    setActiveDocId(importedDocuments[0].id);
    // Close modal
    setIsImportModalOpen(false);
  };

  return (
    <div className="flex h-screen w-screen bg-gray-100 overflow-hidden font-sans text-gray-900">
      
      <ImportModal 
        isOpen={isImportModalOpen} 
        onClose={() => setIsImportModalOpen(false)}
        onImport={handleImportSuccess}
      />

      {/* Left Column: Visuals & Navigation */}
      <div className="hidden lg:block h-full">
         <SidebarLeft document={activeDocument} />
      </div>

      {/* Center Column: Document Reader */}
      <div className="flex-1 h-full min-w-0">
        <DocumentReader 
          selectedDoc={activeDocument} 
          allDocuments={allDocs}
          onSelectDoc={setActiveDocId}
          onOpenImport={() => setIsImportModalOpen(true)}
        />
      </div>

      {/* Right Column: Metadata & Tools */}
      <div className="hidden xl:block h-full">
        <SidebarRight 
          document={activeDocument} 
          notes={notes[activeDocId] || ''} 
          onNotesChange={handleNotesChange} 
        />
      </div>
      
    </div>
  );
};

export default App;
