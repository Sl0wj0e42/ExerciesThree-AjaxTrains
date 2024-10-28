window.onload = function() {
    let request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let elem = document.getElementById("tabTrains");
            let trains = JSON.parse(this.responseText);
            let rows = "";

            for (let i=0; i < trains.trains.length; i++) {
                let train = trains.trains[i];

                let stop = train.stops[train.stops.length-1];

               rows += "<tr>" + "<td>" + train.departs +  "</td>" + "<td>" + stop.name + "</td>" + "<td>" + train.platform + "</td>" + "</tr>";
            }

            elem.innerHTML = rows;
        }
    };

    let url = "https://web.socem.plymouth.ac.uk/COMP3006/trains/trains";
        request.open("GET", url, true);
        request.send();
}