import { app } from "./setup.js";
const port = 8989


app.listen(port, () => {
    console.log("Server run: http://localhost:"+port)
})