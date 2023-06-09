import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
    {
        id: { type: String },
        name: { type: String, required: true },
        date_of_birth: { type: Date, required: true },
        cpf: { type: String, required: true, unique: true },
        phone: { type: String, required: true },
        cep: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        uf: { type: String, required: true },
        email: { type: String, required: true},
        schoolId: {type: mongoose.Schema.Types.ObjectId, ref: 'school'},
        drawsId: [{type: mongoose.Schema.Types.ObjectId, ref: 'draw'}],
        loginId: {type: mongoose.Schema.Types.ObjectId, ref: 'login'}
    },
    {
        versionKey: false
    }
);
const Student = mongoose.model("student", StudentSchema);
export default Student;