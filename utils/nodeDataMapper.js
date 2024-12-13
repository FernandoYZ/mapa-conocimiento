export const mapNodeData = (homeData, nodeData) => {
    return {
        ...nodeData,
        sections: homeData.map(node => ({
            title: node.title,
            link: node.link,
            description: node.description,
            nodeNumber: node.nodeNumber
        })),
        quickActions: [
            { 
                label: 'Flashcard', 
                icon: 'cards', 
                action: () => console.log('Flashcard action') 
            },
            { 
                label: 'Tutor IA', 
                icon: 'ai', 
                action: () => console.log('AI Tutor action') 
            },
            { 
                label: 'Quiz', 
                icon: 'quiz', 
                action: () => console.log('Quiz action') 
            },
            { 
                label: 'Practicar', 
                icon: 'practice', 
                action: () => console.log('Practice action') 
            }
        ]
    }
}