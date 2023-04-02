import { useState } from "react";
//    Guidelines for developer
//   const [handleChange, addInput, removeInputList,inputList] = useDynamicInput() ///

//   {inputList.map((item, index) => {
//             return (
//               <div key={index} className="mb-1 sm:mb-2">
//                 <label className="inline-block mb-1 font-medium">Skills</label>
//                 <input
//                   value={item} 
//                   onChange={(e) => handleChange(e.target.value, index)}
//                 />
//                 {inputList.length > 1 && (
//                   <p
//                     className="bg-red-300 p-2 "
//                     onClick={() => removeInputList(index)}
//                   >
//                     Remove
//                   </p>
//                 )}
//               </div>
//             );
//           })}
//         </section>
//         <p className="bg-slate-200 p-3 " onClick={() => addInput()}>
//           Add Skills
//         </p>
// 
//  console.log(inputList)
// Output ====>>>>>> skills:['react', 'JS', 'FIrebase', 'CSS', 'HTML']


const useDynamicInput = () => {
  const [inputList, setInputList] = useState([]);

  const handleChange = (e, index) => {
    const inputData = [...inputList];
    inputData[index] = e;

    setInputList(inputData);
  };

  const addInput = () => {
    const addData = [...inputList, []];
    setInputList(addData);
  };

  const removeInputList = (i) => {
    const list = [...inputList];
    list.splice(i, 1);
    setInputList(list);
  };

  return [handleChange, addInput, removeInputList, inputList];
};

export default useDynamicInput;
