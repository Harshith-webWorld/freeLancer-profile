export const NotesData= `
------BEST PRACTICES FOR REACT JS AND JS------

1. map and some

2. map and filter

<script>
    let students = [
        { id: "001", name: "Anish", sports: "Cricket" },
        { id: "002", name: "Smriti", sports: "Basketball" },
        { id: "003", name: "Rahul", sports: "Cricket" },
        { id: "004", name: "Bakul", sports: "Basketball" },
        { id: "005", name: "Nikita", sports: "Hockey" }
    ]

    let basketballPlayers = students.filter(function (student) {
        return student.sports === "Basketball";
    }).map(function (student) {
        return student.name;
    })
    console.log("Basketball Players are:");
</script>
Output:

Basketball Players are:
Smriti
Bakul

axios.all
cloneDeep
find duplicate
indexOf
slice
search
Router
Redux
Reduce
responsive screen
`