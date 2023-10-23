import Resume from "../models/resumeModel.js";

export const uploadResume = async (req, res) => {
    try {
        const resume = new Resume(req.body);
        const newResume = await resume.save();
        res.status(200).json({ newResume: newResume, message: "Resume uploaded successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error uploading resume" });
    }
}

export const updateResume = async (req, res) => {
    try {
        console.log(req.body)
        await Resume.findByIdAndUpdate(req.params.id, { $set: req.body });
        const resume = await Resume.findById(req.params.id)
        res.status(200).json({ resume: resume, message: "Resume updated successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error updating resume" });
    }
}

export const endorseResume = async (req, res) => {
    const _id = req.params.id
    const endorsedUserId = req.user.id
    console.log(req.user)
    try {
        const resume = await Resume.findById(_id)
        if (!resume.endorsements.includes(endorsedUserId)) {
            await resume.updateOne({ $push: { endorsements: endorsedUserId } });
            const endorsedResume = await Resume.findById(req.params.id)
            res.status(200).json(endorsedResume)
        }
        else {
            await resume.updateOne({ $pull: { endorsements: endorsedUserId } });
            res.status(200).json("resume unliked")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

export const commentResume = async (req, res) => {
    const id = req.params.id
    const { comment } = req.body
    const commenter = req.user.username
    const newComment = {
        commenter,
        comment
    }
    try {

        await Resume.findByIdAndUpdate(id, { $push: { comments: newComment } });
        const commentedResume = await Resume.findById(req.params.id)
        res.status(200).json(commentedResume)

    } catch (error) {
        res.status(500).json(error)
    }
}

export const getAllResumes = async (req, res) => {
    console.log('get all resumes got hit');
    try {
        const resumes = await Resume.find()
        res.status(200).json(resumes)
    } catch (err) {
        res.status(500).json(err)
    }
}
