const formatDate = (date) => {
    const d = new Date(date);
    let month = `${d.getMonth() +1 }`;
    let day = `${d.getDate()}`;
    const year = d.getFullYear();

    if(month.length < 2){
        month = `0${month}`
    }
    if(day.length < 2){
        day = `0${day}`
    }

    // this means we are returning an array having year,month and day separated by a '-' in between
    return [year,month,day].join('-');
}
export default formatDate
