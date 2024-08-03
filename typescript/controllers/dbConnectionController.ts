import mongoose from "mongoose";
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://rscajasm:10069691006969@cluster0.2ovv04x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log("Base datos conectada correctamente");
  }).catch(e=>{
    console.log(e);
  });
}


