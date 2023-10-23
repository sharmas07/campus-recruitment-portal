import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
    userId: mongoose.Types.ObjectId,
    studentName: {
        type: String,
        required: true
    },
    educationalBackground: [{
        educationTitle: String,
        educationInst:String,
        cgpa:String
    }],
    skills: {
        type: [],
    },
    projects: {
        type: [{
            title: String,
            description: String
        }],
    },
    achievements: [],
    hobbies: [],
    contactInfo: {
        email: String,
        phone: String,
        address: String
    },
    endorsements: [
       
    ],
    comments: [
        {
            commenter: String,
            comment: String,
            commentedAt: {
                type: Date,
                default: Date.now
            }
        }
    ],

},
    { timestamps: true })

const Resume = mongoose.model('Resume', resumeSchema)

export default Resume