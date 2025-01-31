import mongoose from 'mongoose';

const notesSchema = new mongoose.Schema(
    {
        title : {
          type: String,
        },
    
        content : {
          type: String,
        },

        // kisne likha hai
        userRef: {
            type: String,
        }
    
      },
      // jb koi naya banega toh isse iska database timestamp note ho jaega
      {
        timestamps: true,
      }
);

const Notes=mongoose.model('Notes',notesSchema);

export default Notes;

