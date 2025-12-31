// const getStudents =(req,res)=>{
//     let stddata={name:"Pavani sri",roll_number:"23p21a4256"};
//     res.status(200).json({data: stddata})
// };
// const addStudents=(res,req)=>{
//     res.status(201).json({meesege:"Student added"})
// }

// export default getStudents;
import student from "../model/studentsModels.js";

// const getStudentsDetails = async (req, res) => {
//   try {
//     const mydata = await student.find();
//     res.status(200).json(mydata);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
const getStudentsDetails = async (req, res) => {
  try {
    // console.log("GET STUDENTS API HIT");

    const mydata = await student.find();   
    console.log("DATA FROM DB:", mydata);  

    res.status(200).json(mydata);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// const addStudents = async(req, res) => {
//     try{
//          const data = req.body;
//     console.log(data);
//     // const addeddata = await student.create(data);
//     const addeddata = await student.insertMany(data);
//     console.log(addeddata);
//     res.status(201).json("data added");
//     }catch(error){
//         res.status(500).json({error: error.message})
//     }
// };
const addStudents = async (req, res) => {
  try {
    const data = req.body;
    const addedData = await student.create(data);
    res.status(201).json(addedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getStudentId = async (req,res)=>{
    try{
        const id = req.params.userid;
        console.log("id :",id)
        const data =await student.findById({_id:id});
        console.log(data);
        res.status(200).json(data)
    }catch(error){
        res.status(500).json({error:error.message})
    }
};

const delStudent =  async (re)
export {getStudentsDetails, addStudents,getStudentId};