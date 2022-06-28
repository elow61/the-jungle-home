import { useState } from "react";
// No control form
// function handleSubmit(e) {
//     e.preventDefault()
//     alert(e.target['my_input'].value)
// }

// function QuestionForm() {
//     return (
//         <form onSubmit={handleSubmit}>
//             <input type='text' name='my_input' defaultValue='Tapez votre texte' />
//             <button type='submit'>Entrer</button>
//         </form>
//     )
// }

function QuestionForm() {
    const [inputValue, setInputValue] = useState('Add your question here!')
    return (
        <div>
            <textarea value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={() => alert(inputValue)}>Alert</button>
        </div>
    )
}

export default QuestionForm;