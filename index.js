function getLADataFromAPI(){
    var endpoint = 'https://controllerdata.lacity.org/resource/f3p3-3myx.json'
    
    fetch(endpoint) // returns a promise
    .then(function(data){
        return data.json()
    })
    .then(function(json){
        console.log(json)
        var resultDiv = document.getElementById('result')
        resultDiv.innerHTML = JSON.stringify(json, undefined, 2)
        var wantedData = json.map(function(item){
            var title = item.department_title
            var fSalary = item.female_average_salary
            var mSalary = item.male_average_salary
            return 'For the ' + title + ' department, men earn an average salary of ' + mSalary + ', and females earn an average salary of ' + fSalary + '.'
        })
    var htmlForWantedData = wantedData.map(function(string){
            return '<li>' + string + '</li>'
        })
        var finalHTML = ''
        htmlForWantedData.forEach(function(listItem){
            finalHTML += listItem
        })
        resultDiv.innerHTML = finalHTML
    })
    .catch(function(error){
        console.log(error)
    })
}