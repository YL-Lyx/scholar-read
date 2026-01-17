import { DocumentData } from '../types';

// Existing documents
export const documents: DocumentData[] = [
  {
    id: 'doc-1',
    title: 'Advanced CNC Machining Protocols',
    author: 'Dr. Elena Rostova',
    type: 'Journal Article',
    source: 'Intl. Journal of Manufacturing',
    date: '2023-10-15',
    imageMarkers: [1, 2, 3],
    content: `
      Abstract
      
      Computer Numerical Control (CNC) machining stands as the backbone of modern subtractive manufacturing. This paper explores advanced protocols for multi-axis milling, specifically focusing on the reduction of chatter in high-speed applications. By integrating real-time sensor feedback loops, we demonstrate a 15% increase in surface finish quality.

      1. Introduction
      
      The evolution of CNC technology has shifted from simple punched-tape instruction sets to complex, AI-driven adaptive control systems. Traditional G-code generation relies heavily on static assumptions about material properties. However, heterogeneity in raw stock often leads to unpredictable tool wear and vibrational instability.

      2. Methodology
      
      Our experimental setup utilized a 5-axis DMG MORI milling center equipped with piezoelectric accelerometers. We processed 6061-T6 aluminum alloy samples using variable spindle speeds ranging from 10,000 to 18,000 RPM.
      
      3. Chatter Analysis
      
      Vibrational analysis revealed that regenerative chatter is most prevalent at specific harmonic frequencies related to the tooth passing frequency. Figure 1 illustrates the stability lobe diagram derived from our initial tests. By modulating the spindle speed dynamically, we effectively disrupted the regenerative feedback loop.
      
      4. Results
      
      The surface roughness (Ra) measurements indicated a significant improvement. Visual inspection confirms that the adaptive control system minimizes deflection marks. Figure 2 compares the surface topography of samples cut with and without the adaptive protocol.
      
      5. Conclusion
      
      Adaptive control in CNC machining is not merely a theoretical advantage but a practical necessity for high-precision aerospace components. Future work will focus on integrating these protocols into cloud-based manufacturing execution systems (MES).
    `
  },
  {
    id: 'doc-2',
    title: 'Digital Fabrication in Architecture',
    author: 'Prof. Marcus Thorne',
    type: 'Conference Paper',
    source: 'ArchTech Annual Review',
    date: '2022-05-20',
    imageMarkers: [1],
    content: `
      1. The Shift to Digital
      
      Architecture is undergoing a paradigm shift. Digital fabrication allows for the materialization of complex geometries that were previously impossible to construct. This paper examines the role of robotic arms in on-site brick laying.

      2. Parametric Design
      
      Using Grasshopper and Rhino, we generated a parametric facade that reacts to solar gain. The data was directly translated into robot control code. This seamless workflow reduces translation errors between the architect's vision and the contractor's execution.
      
      3. Robotic Assembly
      
      The KUKA KR-150 robot was mounted on a mobile linear track. Figure 1 displays the end-effector design, customized to grip standard masonry units. The precision of placement was within 0.5mm tolerance, far exceeding human capability for non-standard patterns.
      
      4. Structural Integrity
      
      Despite the complex curvature, the structural integrity of the wall was maintained through the use of high-strength mortar and internal reinforcement. Finite Element Analysis (FEA) predicted stress concentrations accurately.
    `
  },
  {
    id: 'doc-3',
    title: 'Laser Cutting: Parameters & Optimization',
    author: 'Sarah Jenkins, MSc',
    type: 'Technical Guide',
    source: 'MakerSpace Handbook',
    date: '2024-01-10',
    imageMarkers: [],
    content: `
      Introduction
      
      Laser cutting is a thermal separation process. The laser beam hits the surface of the material and heats it so strongly that it melts or completely vaporizes. This guide covers optimization for CO2 lasers.

      Key Parameters
      
      1. Power: Defined in Watts. Higher power allows cutting thicker materials but may increase the kerf width.
      2. Speed: The rate at which the head moves. Too slow, and the material burns; too fast, and the cut is incomplete.
      3. Frequency (PPI): Pulses Per Inch. Critical for acrylics to achieve a polished edge.

      Material Focus: Acrylic vs. Plywood
      
      Cast acrylic cuts with a polished edge, whereas extruded acrylic may leave burrs. Plywood requires careful speed adjustment to avoid charring the glue layers. Air assist is mandatory to clear combustible gases from the cutting zone.
      
      Safety
      
      Never cut PVC or vinyl. The chlorine gas released is toxic and corrosive to the machine mechanics. Always monitor the machine while in operation.
    `
  },
  {
    id: 'doc-4',
    title: 'Sustainable Polymers in 3D Printing',
    author: 'Dr. Yumi Tanaka',
    type: 'Journal Article',
    source: 'Green Chemistry Letters',
    date: '2023-08-05',
    imageMarkers: [1, 2, 3, 4],
    content: `
      Abstract
      
      The proliferation of Fused Deposition Modeling (FDM) has led to a surge in plastic waste. This study evaluates the biodegradability of PLA blends reinforced with hemp fibers.

      Experimental Setup
      
      We extruded custom filament spools containing 10%, 20%, and 30% hemp fiber by weight. Figure 1 shows the microscopic structure of the raw fibers. Figure 2 illustrates the filament extrusion line.

      Mechanical Testing
      
      Tensile tests were performed according to ASTM D638. The 20% blend showed the optimal balance between tensile strength and ductility. Figure 3 plots the stress-strain curves for all samples.

      Biodegradation
      
      Samples were buried in industrial compost conditions. Figure 4 depicts the degradation progress over 6 weeks. The hemp-reinforced samples degraded 40% faster than pure PLA, likely due to increased moisture wicking into the polymer matrix.
    `
  },
  {
    id: 'doc-5',
    title: 'Interaction Design for Industrial IoT',
    author: 'James O\'Connell',
    type: 'Case Study',
    source: 'UX Modern Industry',
    date: '2023-11-22',
    imageMarkers: [1, 2],
    content: `
      Overview
      
      Industrial Internet of Things (IIoT) dashboards suffer from information overload. Operators in control rooms are bombarded with thousands of data points. This case study redesigns a refinery control interface.

      The Problem
      
      Cognitive load theory suggests that humans can only track a limited number of variables. The legacy system (Figure 1) relied on dense tables and raw values.

      The Solution
      
      We implemented a "management by exception" UI philosophy. The system only alerts the operator when parameters deviate from the norm. Figure 2 shows the new dashboard layout, featuring high-contrast alarm states and trend lines rather than instantaneous values.

      User Feedback
      
      Post-deployment interviews indicated a 40% reduction in response time to critical alarms. Operators reported lower fatigue levels at the end of shifts.
    `
  },
  {
    id: 'doc-6',
    title: 'Generative AI in Mechanical Engineering',
    author: 'Team Alpha',
    type: 'White Paper',
    source: 'FutureTech Insights',
    date: '2024-02-14',
    imageMarkers: [],
    content: `
      Executive Summary
      
      Generative design algorithms have matured. Engineers can now input boundary conditions (loads, constraints, materials) and allow AI to explore the solution space.

      Topological Optimization
      
      Unlike traditional CAD, where the engineer draws the shape, topological optimization grows the shape. This results in organic, bone-like structures that minimize mass while maximizing stiffness.

      Integration with Additive Manufacturing
      
      These organic shapes are often impossible to machine. Additive manufacturing (3D printing) is the enabling technology that allows generative design to move from screen to reality.

      Challenges
      
      The primary challenge remains the verification of these generated parts. Traditional simulation methods may struggle with the complex lattice structures often produced by generative algorithms.
    `
  }
];

// Documents to "Import" from NotebookLM
export const importedDocuments: DocumentData[] = [
    {
        id: 'nb-1',
        title: 'Quantum Entanglement Basics',
        author: 'NotebookLM Source',
        type: 'Notebook Extract',
        source: 'Google NotebookLM',
        date: '2024-03-01',
        imageMarkers: [],
        content: `
          Introduction to Entanglement

          Quantum entanglement is a physical phenomenon that occurs when a group of particles are generated, interact, or share spatial proximity in a way such that the quantum state of each particle of the group cannot be described independently of the state of the others.
          
          Bell's Inequality

          Figure 1 illustrates the setup for testing Bell's inequality, featuring a source of entangled photon pairs and two independent detectors. The correlation between the measurements suggests a non-local interaction.

          Applications

          Quantum cryptography relies heavily on these principles. Figure 2 shows the key distribution protocol (QKD) flowchart where Alice and Bob share a secret key. If Eve attempts to eavesdrop, the wave function collapses, revealing her presence.
          
          Future Directions
          
          Researchers are now looking into quantum repeaters. Figure 3 depicts a schematic of a quantum repeater node using nitrogen-vacancy centers in diamond to store qubits.
        `
    },
    {
        id: 'nb-2',
        title: 'Neural Networks & Backpropagation',
        author: 'NotebookLM Source',
        type: 'Notebook Extract',
        source: 'Google NotebookLM',
        date: '2024-03-01',
        imageMarkers: [],
        content: `
          The Perceptron
          
          The fundamental building block of a neural network is the perceptron. It takes multiple inputs, multiplies them by weights, and passes the sum through an activation function.

          Gradient Descent
          
          To train the network, we must minimize the loss function. Figure 1 shows the error surface of a simple 2-parameter model. The gradient descent algorithm traverses "downhill" to find the global minimum.
          
          The Vanishing Gradient Problem
          
          In deep networks, gradients can become vanishingly small during backpropagation. Figure 2 compares the derivative values of Sigmoid vs. ReLU activation functions. ReLU maintains a gradient of 1 for positive inputs, mitigating this issue.
        `
    }
];
