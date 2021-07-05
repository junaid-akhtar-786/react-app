const INITIAL_STATE ={

    questions : [{

    question: 'Gigabyte is equal to ____________?',
    options: ['1024 megabytes', '1000 megabytes', '1024 kilobytes'],
    correctAns: '1024 megabytes'
},{
    question: 'ALU is____________?',
    options: ['Array Logic Unit', 'Application Logic Unit', 'Arithmetic Logic Unit'],
    correctAns: 'Arithmetic Logic Unit'
},
{
    question: 'What does DMA stand for?',
    options: ['Direct Module Access', 'Direct Memory Access', 'Direct Memory Allocation'],
    correctAns: 'Direct Memory Access'
},{
    question: 'Data in database at a particular point of time is called as?',
    options: ['Intension', 'Back up', 'Extension'],
    correctAns: 'Extension'
},{
    question: 'What Does SIM Stand for on a Cell Phone?',
    options: [ ' Subscriber identity module' ,'Subscriber Interface Module',  ' Subscriber Inline module'],
    correctAns: ' Subscriber identity module'
}
]

}


const Reducer = (state = INITIAL_STATE)=>{
    return state
}

export default Reducer;