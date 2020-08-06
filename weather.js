            // Let's send a request to meteo provider        
            function askWeather(url, callback) {
                var req = new XMLHttpRequest();
                req.open("GET", url);
                req.addEventListener("load", function () {
                    if (req.status >= 200 && req.status < 400) {
                        callback(req.responseText);
                    } else {
                        console.error(req.status + " " + req.statusText + " " + url);
                    }
                });
                req.addEventListener("error", function () {
                    console.error("Erreur réseau avec l'URL " + url);
                });
                req.send(null);
            }

            // let's create the nodes we need into our HTML page
            let weatherInfo = document.querySelector('#weather');
            let currentDayMeteo = document.createElement('div');
            currentDayMeteo.className = 'currentdaymeteo container';
            let weatherH1 = document.createElement('H1');
            weatherH1.classList.add('weatherh1');
            let currentCondH2 = document.createElement('H2');
            currentCondH2.className = 'currentcondh2';
            let currentMeteo = document.createElement('div');
            currentMeteo.className = 'currentmeteo row';
            let currentHour = document.createElement('div');
            currentHour.className = 'currenthour col-xs-12';
            let nextHoursForecasts = document.createElement('div');
            nextHoursForecasts.className = 'nexthour col-xs-12'
            let nextDaysMeteo = document.createElement('div');
            nextDaysMeteo.setAttribute('ID', 'nextdaysmeteo container');
            let nextDaysMeteoForecasts = document.createElement('div');
            nextDaysMeteoForecasts.setAttribute('class', 'nextdaysmeteoforecasts row');
            let currentCond = document.createElement('p');
            currentCond.className = 'currentcond';
            let thisTimeP = document.createElement('p');
            thisTimeP.className = 'thistimep';
            let currentTemp = document.createElement('span');
            currentTemp.classList.add('currentTemp');
  
            // let's create the tables we need using a function
            function createTable(row, cell) { 
                let table = document.createElement('table');
                for(let r=0; r<row; r++) { 
                    let tr = table.insertRow(r);
                    for (let c=0; c<cell; c++){
                        let td = tr.insertCell(c);
                    }
                }
                return table;
            };

            // first table created
            let nextDaysForecastTable = createTable(25, 5);
            nextDaysForecastTable.className = 'nextdaysforecasttable col-xs-12';


            // let's add the nodes created earlier to the DOM
            weatherInfo.append(weatherH1, currentDayMeteo, nextDaysMeteo);
            currentDayMeteo.append(currentMeteo);
            currentMeteo.append(currentHour, nextHoursForecasts);
            currentHour.append(currentCondH2,thisTimeP, currentCond);
            thisTimeP.append(currentTemp); 
            nextDaysMeteo.append(nextDaysMeteoForecasts);
            nextDaysMeteoForecasts.append(nextDaysForecastTable);


            // let's use the data in the Json file
            askWeather('https://www.prevision-meteo.ch/services/json/paris', function(jsonfile){
                let meteo = JSON.parse(jsonfile);

                // I put my Json data into variables, then variables into arrays, so they can be used
                let meteo_0H = [meteo["fcst_day_0"].hourly_data["0H00"], meteo["fcst_day_1"].hourly_data["0H00"], meteo["fcst_day_2"].hourly_data["0H00"], meteo["fcst_day_3"].hourly_data["0H00"], meteo["fcst_day_4"].hourly_data["0H00"] ]
                let meteo_1H = [meteo["fcst_day_0"].hourly_data["1H00"], meteo["fcst_day_1"].hourly_data["1H00"], meteo["fcst_day_2"].hourly_data["1H00"], meteo["fcst_day_3"].hourly_data["1H00"], meteo["fcst_day_4"].hourly_data["1H00"] ]
                let meteo_2H = [meteo["fcst_day_0"].hourly_data["2H00"], meteo["fcst_day_1"].hourly_data["2H00"], meteo["fcst_day_2"].hourly_data["2H00"], meteo["fcst_day_3"].hourly_data["2H00"], meteo["fcst_day_4"].hourly_data["2H00"] ]
                let meteo_3H = [meteo["fcst_day_0"].hourly_data["3H00"], meteo["fcst_day_1"].hourly_data["3H00"], meteo["fcst_day_2"].hourly_data["3H00"], meteo["fcst_day_3"].hourly_data["3H00"], meteo["fcst_day_4"].hourly_data["3H00"] ]
                let meteo_4H = [meteo["fcst_day_0"].hourly_data["4H00"], meteo["fcst_day_1"].hourly_data["4H00"], meteo["fcst_day_2"].hourly_data["4H00"], meteo["fcst_day_3"].hourly_data["4H00"], meteo["fcst_day_4"].hourly_data["4H00"] ]
                let meteo_5H = [meteo["fcst_day_0"].hourly_data["5H00"], meteo["fcst_day_1"].hourly_data["5H00"], meteo["fcst_day_2"].hourly_data["5H00"], meteo["fcst_day_3"].hourly_data["5H00"], meteo["fcst_day_4"].hourly_data["5H00"] ]
                let meteo_6H = [meteo["fcst_day_0"].hourly_data["6H00"], meteo["fcst_day_1"].hourly_data["6H00"], meteo["fcst_day_2"].hourly_data["6H00"], meteo["fcst_day_3"].hourly_data["6H00"], meteo["fcst_day_4"].hourly_data["6H00"] ]
                let meteo_7H = [meteo["fcst_day_0"].hourly_data["7H00"], meteo["fcst_day_1"].hourly_data["7H00"], meteo["fcst_day_2"].hourly_data["7H00"], meteo["fcst_day_3"].hourly_data["7H00"], meteo["fcst_day_4"].hourly_data["7H00"] ]
                let meteo_8H = [meteo["fcst_day_0"].hourly_data["8H00"], meteo["fcst_day_1"].hourly_data["8H00"], meteo["fcst_day_2"].hourly_data["8H00"], meteo["fcst_day_3"].hourly_data["8H00"], meteo["fcst_day_4"].hourly_data["8H00"] ]
                let meteo_9H = [meteo["fcst_day_0"].hourly_data["9H00"], meteo["fcst_day_1"].hourly_data["9H00"], meteo["fcst_day_2"].hourly_data["9H00"], meteo["fcst_day_3"].hourly_data["9H00"], meteo["fcst_day_4"].hourly_data["9H00"] ]
                let meteo_10H = [meteo["fcst_day_0"].hourly_data["10H00"], meteo["fcst_day_1"].hourly_data["10H00"], meteo["fcst_day_2"].hourly_data["10H00"], meteo["fcst_day_3"].hourly_data["10H00"], meteo["fcst_day_4"].hourly_data["10H00"] ]
                let meteo_11H = [meteo["fcst_day_0"].hourly_data["11H00"], meteo["fcst_day_1"].hourly_data["11H00"], meteo["fcst_day_2"].hourly_data["11H00"], meteo["fcst_day_3"].hourly_data["11H00"], meteo["fcst_day_4"].hourly_data["11H00"] ]
                let meteo_12H = [meteo["fcst_day_0"].hourly_data["12H00"], meteo["fcst_day_1"].hourly_data["12H00"], meteo["fcst_day_2"].hourly_data["12H00"], meteo["fcst_day_3"].hourly_data["12H00"], meteo["fcst_day_4"].hourly_data["12H00"] ]
                let meteo_13H = [meteo["fcst_day_0"].hourly_data["13H00"], meteo["fcst_day_1"].hourly_data["13H00"], meteo["fcst_day_2"].hourly_data["13H00"], meteo["fcst_day_3"].hourly_data["13H00"], meteo["fcst_day_4"].hourly_data["13H00"] ]
                let meteo_14H = [meteo["fcst_day_0"].hourly_data["14H00"], meteo["fcst_day_1"].hourly_data["14H00"], meteo["fcst_day_2"].hourly_data["14H00"], meteo["fcst_day_3"].hourly_data["14H00"], meteo["fcst_day_4"].hourly_data["14H00"] ]
                let meteo_15H = [meteo["fcst_day_0"].hourly_data["15H00"], meteo["fcst_day_1"].hourly_data["15H00"], meteo["fcst_day_2"].hourly_data["15H00"], meteo["fcst_day_3"].hourly_data["15H00"], meteo["fcst_day_4"].hourly_data["15H00"] ]
                let meteo_16H = [meteo["fcst_day_0"].hourly_data["16H00"], meteo["fcst_day_1"].hourly_data["16H00"], meteo["fcst_day_2"].hourly_data["16H00"], meteo["fcst_day_3"].hourly_data["16H00"], meteo["fcst_day_4"].hourly_data["16H00"] ]
                let meteo_17H = [meteo["fcst_day_0"].hourly_data["17H00"], meteo["fcst_day_1"].hourly_data["17H00"], meteo["fcst_day_2"].hourly_data["17H00"], meteo["fcst_day_3"].hourly_data["17H00"], meteo["fcst_day_4"].hourly_data["17H00"] ]
                let meteo_18H = [meteo["fcst_day_0"].hourly_data["18H00"], meteo["fcst_day_1"].hourly_data["18H00"], meteo["fcst_day_2"].hourly_data["18H00"], meteo["fcst_day_3"].hourly_data["18H00"], meteo["fcst_day_4"].hourly_data["18H00"] ]
                let meteo_19H = [meteo["fcst_day_0"].hourly_data["19H00"], meteo["fcst_day_1"].hourly_data["19H00"], meteo["fcst_day_2"].hourly_data["19H00"], meteo["fcst_day_3"].hourly_data["19H00"], meteo["fcst_day_4"].hourly_data["19H00"] ]
                let meteo_20H = [meteo["fcst_day_0"].hourly_data["20H00"], meteo["fcst_day_1"].hourly_data["20H00"], meteo["fcst_day_2"].hourly_data["20H00"], meteo["fcst_day_3"].hourly_data["20H00"], meteo["fcst_day_4"].hourly_data["20H00"] ]
                let meteo_21H = [meteo["fcst_day_0"].hourly_data["21H00"], meteo["fcst_day_1"].hourly_data["21H00"], meteo["fcst_day_2"].hourly_data["21H00"], meteo["fcst_day_3"].hourly_data["21H00"], meteo["fcst_day_4"].hourly_data["21H00"] ]
                let meteo_22H = [meteo["fcst_day_0"].hourly_data["22H00"], meteo["fcst_day_1"].hourly_data["22H00"], meteo["fcst_day_2"].hourly_data["22H00"], meteo["fcst_day_3"].hourly_data["22H00"], meteo["fcst_day_4"].hourly_data["22H00"] ]
                let meteo_23H = [meteo["fcst_day_0"].hourly_data["23H00"], meteo["fcst_day_1"].hourly_data["23H00"], meteo["fcst_day_2"].hourly_data["23H00"], meteo["fcst_day_3"].hourly_data["23H00"], meteo["fcst_day_4"].hourly_data["23H00"] ]

                let arrayOfMeteo = [meteo_0H, meteo_1H, meteo_2H, meteo_3H, meteo_4H, meteo_5H, meteo_6H, meteo_7H, meteo_8H, meteo_9H, meteo_10H, meteo_11H, meteo_12H, meteo_13H, meteo_14H, meteo_15H, meteo_16H, meteo_17H, meteo_18H, meteo_19H, meteo_20H, meteo_21H, meteo_22H, meteo_23H ]; 

                // I fill with data, the first column and the first row of the table
                let firstCell = document.querySelector('table.nextdaysforecasttable tbody tr:first-child td:first-child'); // La première cellule du tableau partant de la gauche
                firstCell.innerHTML = 'Prochainement';
                let daysRow = document.querySelectorAll('table.nextdaysforecasttable tbody tr:first-child td'); // les 4 dernières cellules de la première ligne (en haut)
                let hoursCol = document.querySelectorAll('table.nextdaysforecasttable tr td:first-child'); // les 23 dernières cellules de la première colonne (à gauche)
                let arrayOfDays = [meteo["fcst_day_0"], meteo["fcst_day_1"], meteo["fcst_day_2"], meteo["fcst_day_3"], meteo["fcst_day_4"]];// 
                let arrayofHours = ["0H", "1H", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H", "11H", "12H", "13H", "14H", "15H", "16H", "17H", "18H", "19H", "20H", "21H", "22H", "23H" ];
                let z, y, x, w;
                for (z = 1, y = 1; z<daysRow.length, y<arrayOfDays.length; z++, y++) {
                    daysRow[z].innerHTML = '<span class="weekday">' + arrayOfDays[y].day_long + '</span>' + '<br>' + '<span class="weekdate">' + ' | ' + arrayOfDays[y].date + '</span>' + ' | ';
                }
                for (x = 1, w = 0; x<hoursCol.length, w<arrayofHours.length; x++, w++) {
                    hoursCol[x].innerHTML = arrayofHours[w];
                }

                // Let's display the weather conditions at current time
                t = new Date();
                    function addZero(i, h) { // add zero if time data has 1 digit only
                        if (i < 10 ) {
                          i = "0" + i;
                        }
                        return i;
                      }
                let theParisHour = addZero(t.getUTCHours()+2); //Paris time is UTC+2
                let theParisMin= addZero(t.getUTCMinutes());
                weatherH1.innerHTML = 'Météo sur ' + '<span id="paris">' + meteo.city_info.name + ', ' + meteo.city_info.country + '</span>';
                currentCondH2.innerHTML = 'En ce moment, ' + arrayOfDays[0].day_short + ' ' + theParisHour + ':' + theParisMin + ' min';
                let meteoIcon = document.createElement('img');
                meteoIcon.className = 'meteoicon';
                let meteoIconSrc = document.createAttribute('src');
                meteoIcon.setAttributeNode(meteoIconSrc);
                meteoIconSrc.value = meteo.current_condition.icon;
                currentTemp.insertAdjacentElement('afterend', meteoIcon);
                currentTemp.innerHTML = meteo.current_condition.tmp  + '<span class="celsius">' + '℃' + '</span>';
                currentCond.innerHTML = '<span class="conditions"> Conditions: </span><span class="conditions-val">' + meteo.current_condition.condition + '</span><span class="conditions"> | Humidité: </span><span class="conditions-val">' + meteo.current_condition.humidity + '% </span><span class="conditions"> | Pression: </span><span class="conditions-val">' + meteo.current_condition.pressure + ' Hpa </span><span class="conditions"> | Vitesse du vent: </span><span class="conditions-val">' + meteo.current_condition.wnd_spd + ' Km/h </span><span class="conditions"> | Direction du vent: </span><span class="conditions-val">' + meteo.current_condition.wnd_dir + '° </span><span class="conditions"> | Rafales: </span><span class = "conditions-val">' + meteo.current_condition.wnd_gust + ' Km/h </span>';

                // Let's create the table of today's forecasts
                let nextHours = 23 - (t.getUTCHours()+2); // Hours left in the day. Note: Paris time is UTC+2. 
                let nextHoursH2 = document.createElement('H2');
                nextHoursH2.innerHTML = "Plus tard aujourd'hui:";
                nextHoursH2.className = 'nextHoursh2';
                let todayForecastTable = createTable(2, nextHours);
                todayForecastTable.className = 'todayforecasttable';
                nextHoursForecasts.append(nextHoursH2, todayForecastTable);
                let nextHoursRow = document.querySelectorAll('table.todayforecasttable tbody tr:nth-child(1)>td');
                let nextHoursForecastsRow = document.querySelectorAll('table.todayforecasttable tbody tr:nth-child(2)>td');
                let paris_time = []; // array of next hours

                // Let's display next hours forecasts
                if (nextHours<=0) { 
                    document.querySelector('table.todayforecasttable').remove();
                    nextHoursH2.remove();
                } else { 
                    for(let time=1; time<=nextHours; time++) {
                        paris_time.push((t.getUTCHours()+2) + time)// Let's put into the array, the hours remaining in the current day
                    }

                    for (r1=0, thetime=0; r1<nextHoursRow.length, thetime<paris_time.length; r1++, thetime++) {
                        nextHoursRow[r1].innerHTML = '<span class="nexthourtemp">' +  paris_time[thetime] + '</span>' + 'H';
                    }; // Let's display the next hours
                    
                    for (r2=0, j=paris_time[0]; r2<nextHoursForecastsRow.length, j<=23; r2++, j++){ // let display the next temperatures
                        nextHoursForecastsRow[r2].innerHTML = arrayOfMeteo[j][0].TMP2m + '<span class="celsius">' + '℃' + '</span>';//Note: arrayOfMeteo[1][0] = weather at 1am today; arrayOfMeteo[13][0] = weather at 13H today
                        let nextHoursIcon = document.createElement('img');
                        nextHoursIcon.className = 'meteoiconhour';
                        let nextHoursIconSrc = document.createAttribute('src');
                        nextHoursIcon.setAttributeNode(nextHoursIconSrc);
                        nextHoursIconSrc.value = arrayOfMeteo[j][0].ICON;
                        nextHoursForecastsRow[r2].insertAdjacentElement('beforeend',nextHoursIcon);
                    }
                };

                // What happen if the user wants to view next hours forecasts detailed conditions
                let i = undefined;
                let comingHoursForecasts = document.querySelectorAll('table.todayforecasttable tbody tr:nth-child(2) > td');
                for (let g=0; g < comingHoursForecasts.length; g++) {
                    comingHoursForecasts[g].addEventListener('click', function(){
                        i = (paris_time[g]);
                        currentTemp.innerHTML = arrayOfMeteo[i][0].TMP2m + '<span class="celsius">' + '℃' + '</span>'; // "currentTemp" is filled with the temperature of the next hour requested
                        meteoIconSrc.value = arrayOfMeteo[i][0].ICON; // the url in the src attribute becomes the one for the next hour requested
                        currentCond.innerHTML = '<span class="conditions"> Conditions: </span><span class="conditions-val">' + arrayOfMeteo[i][0].CONDITION + '</span><span class="conditions"> | Humidité relative: </span><span class="conditions-val">' + arrayOfMeteo[i][0].RH2m + '% </span><span class="conditions"> | Précipitations: </span><span class="conditions-val">' + arrayOfMeteo[i][0].APCPsfc + ' mm </span><span class="conditions"> | Vitesse du vent à 10m : </span><span class="conditions-val">' + arrayOfMeteo[i][0].WNDSPD10m + ' Km/h</span><span class="conditions"> | Direction du vent: </span><span class="conditions-val">' + arrayOfMeteo[i][0].WNDDIR10m + '°</span><span class="conditions"> | Rafales à 10m: </span><span class="conditions-val">' + arrayOfMeteo[i][0].WNDGUST10m + ' Km/h</span>';
                        currentCondH2.innerHTML = 'Aujourd\'hui' + ' à ' + arrayofHours[i];
                    })
                }

                // Let's collect and display the forecasts of the next days

                // Let's collect...
                let hour00 = document.querySelectorAll('table.nextdaysforecasttable tr:nth-child(2)>td'); // selects all the td in the table row, which is the second child of table
                let hour01 = document.querySelectorAll('table.nextdaysforecasttable tr:nth-child(3)>td');
                let hour02 = document.querySelectorAll('table.nextdaysforecasttable tr:nth-child(4)>td');
                let hour03 = document.querySelectorAll('table.nextdaysforecasttable tr:nth-child(5)>td');
                let hour04 = document.querySelectorAll('table.nextdaysforecasttable tr:nth-child(6)>td');
                let hour05 = document.querySelectorAll('table.nextdaysforecasttable tr:nth-child(7)>td');
                let hour06 = document.querySelectorAll('table.nextdaysforecasttable tr:nth-child(8)>td');
                let hour07 = document.querySelectorAll('table.nextdaysforecasttable tr:nth-child(9)>td');
                let hour08 = document.querySelectorAll('table.nextdaysforecasttable tr:nth-child(10)>td');
                let hour09 = document.querySelectorAll('table.nextdaysforecasttable tr:nth-child(11)>td');
                let hour10 = document.querySelectorAll('table.nextdaysforecasttable tr:nth-child(12)>td');
                let hour11 = document.querySelectorAll('table.nextdaysforecasttable tr:nth-child(13)>td');
                let hour12 = document.querySelectorAll('table.nextdaysforecasttable tr:nth-child(14)>td');
                let hour13 = document.querySelectorAll('table.nextdaysforecasttable tr:nth-child(15)>td');
                let hour14 = document.querySelectorAll('table.nextdaysforecasttable tr:nth-child(16)>td');
                let hour15 = document.querySelectorAll('table.nextdaysforecasttable tr:nth-child(17)>td');
                let hour16 = document.querySelectorAll('table.nextdaysforecasttable tr:nth-child(18)>td');
                let hour17 = document.querySelectorAll('table.nextdaysforecasttable tr:nth-child(19)>td');
                let hour18 = document.querySelectorAll('table.nextdaysforecasttable tr:nth-child(20)>td');
                let hour19 = document.querySelectorAll('table.nextdaysforecasttable tr:nth-child(21)>td');
                let hour20 = document.querySelectorAll('table.nextdaysforecasttable tr:nth-child(22)>td');
                let hour21 = document.querySelectorAll('table.nextdaysforecasttable tr:nth-child(23)>td');
                let hour22 = document.querySelectorAll('table.nextdaysforecasttable tr:nth-child(24)>td');
                let hour23 = document.querySelectorAll('table.nextdaysforecasttable tr:nth-child(25)>td');

                let hour = [hour00, hour01, hour02, hour03, hour04, hour05, hour06, hour07, hour08, hour09, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17, hour18, hour19, hour20, hour21, hour22, hour23];

                // let's create a function to fill the table data with next days forecasts...
                function nextDaysForecast(tablerow, h) {
                // tablerow selects all the td in the table row
                //Reminder Note: arrayOfMeteo[1][1] = weather at 1am tomorrow / h=1; arrayOfMeteo[13][2] = weather at 1PM the day after tomorrow / h=13
                    let t, b; 
                    for (t = 1, b = 1; t<tablerow.length, b<arrayOfMeteo[h].length;t++, b++) {
                        let meteoIcon_nextDays = document.createElement('img');
                        meteoIcon_nextDays.setAttribute('title', arrayofHours[h])
                        meteoIcon_nextDays.className = 'meteoiconhour';
                        let meteoIconSrc_nextDays = document.createAttribute('src');
                        meteoIcon_nextDays.setAttributeNode(meteoIconSrc_nextDays);
                        meteoIconSrc_nextDays.value = arrayOfMeteo[h][b].ICON;
                        tablerow[t].innerHTML = arrayOfMeteo[h][b].TMP2m + '<span class="celsius">' + '℃' + '</span>';
                        tablerow[t].insertAdjacentElement('beforeend', meteoIcon_nextDays);
                    }
                }      
                // let's fill the table data, 1 row after another   
                hour00.innerHTML = nextDaysForecast(hour00, 0);
                hour01.innerHTML = nextDaysForecast(hour01, 1);
                hour02.innerHTML = nextDaysForecast(hour02, 2);
                hour03.innerHTML = nextDaysForecast(hour03, 3);
                hour04.innerHTML = nextDaysForecast(hour04, 4);
                hour05.innerHTML = nextDaysForecast(hour05, 5);
                hour06.innerHTML = nextDaysForecast(hour06, 6);
                hour07.innerHTML = nextDaysForecast(hour07, 7);
                hour08.innerHTML = nextDaysForecast(hour08, 8);
                hour09.innerHTML = nextDaysForecast(hour09, 9);
                hour10.innerHTML = nextDaysForecast(hour10, 10);
                hour11.innerHTML = nextDaysForecast(hour11, 11);
                hour12.innerHTML = nextDaysForecast(hour12, 12);
                hour13.innerHTML = nextDaysForecast(hour13, 13);
                hour14.innerHTML = nextDaysForecast(hour14, 14);
                hour15.innerHTML = nextDaysForecast(hour15, 15);
                hour16.innerHTML = nextDaysForecast(hour16, 16);
                hour17.innerHTML = nextDaysForecast(hour17, 17);
                hour18.innerHTML = nextDaysForecast(hour18, 18);
                hour19.innerHTML = nextDaysForecast(hour19, 19);
                hour20.innerHTML = nextDaysForecast(hour20, 20);
                hour21.innerHTML = nextDaysForecast(hour21, 21);
                hour22.innerHTML = nextDaysForecast(hour22, 22);
                hour23.innerHTML = nextDaysForecast(hour23, 23);

                //WHAT IF THE USER WANTS TO VIEW THE DETAILS OF FORECASTS 

                // I make a function where "line" represents the rows of the table, h represents hour of the forecast, and time represents the hour in string type (see above)
                function detail (line, h, time){ 

                    for(let l=1; l<line.length; l++) { // let consider data in any given line. Example: line 2 that I have put earlier in "hour0"
                        line[l].addEventListener('click', function() { // If the user clicks in one of the cells (on let's say line 2, "hour0, which is midnight) ...
                            switch(l) {
                                case 1: // ... let's say the click is on the cell at index 1 (which is tomorrow), the nodes are changed as follow...
                                currentTemp.innerHTML = arrayOfMeteo[h][1].TMP2m + '<span class="celsius">' + '℃' + '</span>'; // "currentTemp" is filled with the temperature tomorrow (fcst_day_1)
                                meteoIconSrc.value = arrayOfMeteo[h][1].ICON; // the url in the src attribute becomes the one for tomorrow
                                currentCond.innerHTML = '<span class="conditions"> Conditions: </span><span class="conditions-val">' + arrayOfMeteo[h][1].CONDITION + '</span><span class="conditions"> | Humidité relative: </span><span class="conditions-val">' + arrayOfMeteo[h][1].RH2m + '% </span><span class="conditions"> | Précipitations: </span><span class="conditions-val">' + arrayOfMeteo[h][1].APCPsfc + ' mm </span><span class="conditions"> | Vitesse du vent à 10m : </span><span class="conditions-val">' + arrayOfMeteo[h][1].WNDSPD10m + ' Km/h</span><span class="conditions"> | Direction du vent: </span><span class="conditions-val">' + arrayOfMeteo[h][1].WNDDIR10m + '°</span><span class="conditions"> | Rafales à 10m: </span><span class="conditions-val">' + arrayOfMeteo[h][1].WNDGUST10m + ' Km/h</span>';
                                currentCondH2.innerHTML = arrayOfDays[1].day_long +' '+ arrayOfDays[1].date + ' à ' + time;
                                break;
                                case 2: // ... let's say the click is on the cell at index 2 (which is 1 day after tomorrow), the nodes are changed as follow...
                                currentTemp.innerHTML = arrayOfMeteo[h][2].TMP2m + '<span class="celsius">' + '℃' + '</span>';// "currentTemp" is filled with the temperature the located in 1 day  after tomorrow
                                meteoIconSrc.value = arrayOfMeteo[h][2].ICON;
                                currentCond.innerHTML = '<span class="conditions"> Conditions: </span><span class="conditions-val">' + arrayOfMeteo[h][2].CONDITION + '</span><span class="conditions"> | Humidité relative: </span><span class="conditions-val">' + arrayOfMeteo[h][2].RH2m + '% </span><span class="conditions"> | Précipitations: </span><span class="conditions-val">' + arrayOfMeteo[h][2].APCPsfc + ' mm </span><span class="conditions"> | Vitesse du vent à 10m : </span><span class="conditions-val">' + arrayOfMeteo[h][2].WNDSPD10m + ' Km/h</span><span class="conditions"> | Direction du vent: </span><span class="conditions-val">' + arrayOfMeteo[h][2].WNDDIR10m + '°</span><span class="conditions"> | Rafales à 10m: </span><span class="conditions-val">' + arrayOfMeteo[h][2].WNDGUST10m + ' Km/h</span>';
                                currentCondH2.innerHTML = arrayOfDays[2].day_long +' '+ arrayOfDays[2].date + ' à ' + time;
                                break;
                                case 3: // ... let's say the click is on the cell at index 3 (which is the 2 days after tomorrow), the nodes are changed as follow...
                                currentTemp.innerHTML = arrayOfMeteo[h][3].TMP2m + '<span class="celsius">' + '℃' + '</span>';
                                meteoIconSrc.value = arrayOfMeteo[h][3].ICON;
                                currentCond.innerHTML = '<span class="conditions"> Conditions: </span><span class="conditions-val">' + arrayOfMeteo[h][3].CONDITION + '</span><span class="conditions"> | Humidité relative: </span><span class="conditions-val">' + arrayOfMeteo[h][3].RH2m + '% </span><span class="conditions"> | Précipitations: </span><span class="conditions-val">' + arrayOfMeteo[h][3].APCPsfc + ' mm </span><span class="conditions"> | Vitesse du vent à 10m : </span><span class="conditions-val">' + arrayOfMeteo[h][3].WNDSPD10m + ' Km/h</span><span class="conditions"> | Direction du vent: </span><span class="conditions-val">' + arrayOfMeteo[h][3].WNDDIR10m + '°</span><span class="conditions"> | Rafales à 10m: </span><span class="conditions-val">' + arrayOfMeteo[h][3].WNDGUST10m + ' Km/h</span>';
                                currentCondH2.innerHTML = arrayOfDays[3].day_long +' '+ arrayOfDays[3].date + ' à ' + time;
                                break;
                                case 4: // ... let's say the click is on the cell at index 4 (which is the 3 days after tomorrow), the nodes are changed as follow...
                                currentTemp.innerHTML = arrayOfMeteo[h][4].TMP2m + '<span class="celsius">' + '℃' + '</span>';
                                meteoIconSrc.value = arrayOfMeteo[h][4].ICON;
                                currentCond.innerHTML = '<span class="conditions"> Conditions: </span><span class="conditions-val">' + arrayOfMeteo[h][4].CONDITION + '</span><span class="conditions"> | Humidité relative: </span><span class="conditions-val">' + arrayOfMeteo[h][4].RH2m + '% </span><span class="conditions"> | Précipitations: </span><span class="conditions-val">' + arrayOfMeteo[h][4].APCPsfc + ' mm </span><span class="conditions"> | Vitesse du vent à 10m : </span><span class="conditions-val">' + arrayOfMeteo[h][4].WNDSPD10m + ' Km/h</span><span class="conditions"> | Direction du vent: </span><span class="conditions-val">' + arrayOfMeteo[h][4].WNDDIR10m + '°</span><span class="conditions"> | Rafales à 10m: </span><span class="conditions-val">' + arrayOfMeteo[h][4].WNDGUST10m + ' Km/h</span>';
                                currentCondH2.innerHTML = arrayOfDays[4].day_long +' '+ arrayOfDays[4].date + ' à ' + time;
                                break;
                            }
                            currentHour.scrollIntoView(true) 
                        })
                    }
                }; 

                hour00.onclick = detail(hour00, 0,'Minuit');
                hour01.onclick = detail(hour01, 1, arrayofHours[1]);
                hour02.onclick = detail(hour02, 2, arrayofHours[2]);
                hour03.onclick = detail(hour03, 3, arrayofHours[3]);
                hour04.onclick = detail(hour04, 4, arrayofHours[4]);
                hour05.onclick = detail(hour05, 5, arrayofHours[5]);
                hour06.onclick = detail(hour06, 6, arrayofHours[6]);
                hour07.onclick = detail(hour07, 7, arrayofHours[7]);
                hour08.onclick = detail(hour08, 8, arrayofHours[8]);
                hour09.onclick = detail(hour09, 9, arrayofHours[9]);
                hour10.onclick = detail(hour10, 10, arrayofHours[10]);
                hour11.onclick = detail(hour11, 11, arrayofHours[11]);
                hour12.onclick = detail(hour12, 12, arrayofHours[12]);
                hour13.onclick = detail(hour13, 13, arrayofHours[13]);
                hour14.onclick = detail(hour14, 14, arrayofHours[14]);
                hour15.onclick = detail(hour15, 15, arrayofHours[15]);
                hour16.onclick = detail(hour16, 16, arrayofHours[16]);
                hour17.onclick = detail(hour17, 17, arrayofHours[17]);
                hour18.onclick = detail(hour18, 18, arrayofHours[18]);
                hour19.onclick = detail(hour19, 19, arrayofHours[19]);
                hour20.onclick = detail(hour20, 20, arrayofHours[20]);
                hour21.onclick = detail(hour21, 21, arrayofHours[21]);
                hour22.onclick = detail(hour22, 22, arrayofHours[22]);
                hour23.onclick = detail(hour23, 23, arrayofHours[23]);

                // Let's change the mouse pointer when hovering (OR NOT) td

                for (let m = 0; m < hour.length; m++) {
                    for (let o = 1; o < hour[m].length; o++) {
                        hour[m][o].addEventListener('mouseover', function(){
                            hour[m][o].style.cursor = 'pointer';
                        });
                        hour[m][o].addEventListener("mouseout", function(){
                            hour[m][o].style.cursor = 'default';
                        })
                    } 
                }
                for (let k = 0; k < comingHoursForecasts.length; k++) {
                    comingHoursForecasts[k].addEventListener('mouseover', function(){
                        comingHoursForecasts[k].style.cursor = 'pointer';
                    });
                    comingHoursForecasts[k].addEventListener('mouseout', function(){
                        comingHoursForecasts[k].style.cursor = 'default';
                    });
                }
                            // Let's change the page background according to the time of the day
                /*if(t.getMonth()+1 >= 10 && t.getMonth()+1 < 4) { //between october and March
                    if (theParisHour >= 20  && theParisHour <= 5){
                            weatherInfo.style.backgroundColor = 'rgb(4, 13, 21, .9)';
                            document.body.style.color = '#fff';
                    } else if (theParisHour >= 6  && theParisHour <= 9){
                            weatherInfo.style.backgroundColor = 'rgb(38, 112, 175, .9)';
                            document.body.style.color = '#fff';
                    } else if (theParisHour >= 10  && theParisHour <= 16){
                            weatherInfo.style.backgroundColor = 'rgb(234, 245, 250, .9)';
                            document.body.style.color = '#000';
                    } else if (theParisHour >= 17  && theParisHour <= 19){
                            weatherInfo.style.backgroundColor = 'rgb(61, 61, 92, .9)';
                            document.body.style.color = '#fff';
                    } else {
                            weatherInfo.style.backgroundColor = 'rgb(255, 255, 255, .9)';
                            document.body.style.color = '#000';
                    }
                } else {
                        if(theParisHour >= 21  && theParisHour <= 5) { //between 10pm and 5am
                            weatherInfo.style.backgroundColor = 'rgb(10, 31, 41, .9)';
                            document.body.style.color = '#fff';
                        } else if (theParisHour >= 6  && theParisHour <= 9){
                            weatherInfo.style.backgroundColor = 'rgb(101, 194, 245, .9)';
                            document.body.style.color = '#000';
                        } else if (theParisHour >= 10  && theParisHour <= 20){
                            weatherInfo.style.backgroundImage = 'url(https://res.cloudinary.com/monwebmestre/image/upload/v1596707089/Projets/Meteo%20Paris/Jour-eclairci-min.jpg)';
                            document.body.style.color = '#fff';
                        }  else {
                            weatherInfo.style.backgroundColor = 'rgb(255, 255, 255, .9)';
                            document.body.style.color = '#000';
                    }
                }*/
                
                //Let's change the page background according to the conditions
                let condVal = document.querySelector('.conditions-val').textContent 
                switch(condVal) {
                    case "Ensoleillé":
                        weatherInfo.style.backgroundImage= 'url("https://res.cloudinary.com/monwebmestre/image/upload/v1596707089/Projets/Meteo%20Paris/Jour-ensoleille-min.jpg")';
                        document.body.style.color = '#fff'; 
                        break;
                    case "Nuit claire":
                        weatherInfo.style.backgroundImage= 'url("https://res.cloudinary.com/monwebmestre/image/upload/v1596744625/Projets/Meteo%20Paris/Nuit-claire-rgb_38_-112_-175_-min.jpg")';
                        document.body.style.color = '#fff'; 
                        break;
                    case "Nuit légèrement voilée": //*
                        weatherInfo.style.backgroundImage= 'url("https://res.cloudinary.com/monwebmestre/image/upload/v1596744625/Projets/Meteo%20Paris/Nuit-claire-rgb_38_-112_-175_-min.jpg")';
                        document.body.style.color = '#fff'; 
                        break;
                    case "Ciel voilé"://*
                        weatherInfo.style.backgroundImage= 'url("https://res.cloudinary.com/monwebmestre/image/upload/v1596707089/Projets/Meteo%20Paris/Temps-par-defaut-min.jpg")';
                        document.body.style.color = '#fff'; 
                        break;
                    case "Eclaircies": 
                        weatherInfo.style.backgroundImage= 'url("https://res.cloudinary.com/monwebmestre/image/upload/v1596707089/Projets/Meteo%20Paris/Jour-eclairci-min.jpg")';
                        document.body.style.color = '#fff'; 
                        break;
                    case "Fortement nuageux": //*
                        weatherInfo.style.backgroundImage= 'url("https://res.cloudinary.com/monwebmestre/image/upload/v1596707089/Projets/Meteo%20Paris/Nuit-nuageuse-rgb_38_-112_-175_-min.jpg")';
                        document.body.style.color = '#fff'; 
                        break;
                    case "Développement nuageux":
                        weatherInfo.style.backgroundImage= 'url("https://res.cloudinary.com/monwebmestre/image/upload/v1596707089/Projets/Meteo%20Paris/Jour-nuageux-min.jpg")';
                        document.body.style.color = '#fff'; 
                        break;
                    case "Averses de pluie faible":
                        weatherInfo.style.backgroundImage= 'url("https://res.cloudinary.com/monwebmestre/image/upload/v1596707244/Projets/Meteo%20Paris/Jour-pluvieux-min.jpg")';
                        document.body.style.color = '#fff'; 
                        break;
                    case "Nuit nuageuse":
                        weatherInfo.style.backgroundImage= 'url("https://res.cloudinary.com/monwebmestre/image/upload/v1596707089/Projets/Meteo%20Paris/Nuit-nuageuse-rgb_38_-112_-175_-min.jpg")';
                        document.body.style.color = '#fff'; 
                        break;
                    case "Nuit avec développement nuageux":
                        weatherInfo.style.backgroundImage= 'url("https://res.cloudinary.com/monwebmestre/image/upload/v1596707089/Projets/Meteo%20Paris/Nuit-nuageuse-rgb_38_-112_-175_-min.jpg")';
                        document.body.style.color = '#fff'; 
                        break;
                    case "Faiblement orageux": //*
                        weatherInfo.style.backgroundImage= 'url("https://res.cloudinary.com/monwebmestre/image/upload/v1596707244/Projets/Meteo%20Paris/Jour-pluvieux-min.jpg")';
                        document.body.style.color = '#fff'; 
                        break;
                    case "Faiblement nuageux":
                        weatherInfo.style.backgroundImage= 'url("https://res.cloudinary.com/monwebmestre/image/upload/v1596707089/Projets/Meteo%20Paris/Temps-par-defaut-min.jpg")';
                        document.body.style.color = '#fff'; 
                        break;
                    default:
                        weatherInfo.style.backgroundImage= 'url("https://res.cloudinary.com/monwebmestre/image/upload/v1596707089/Projets/Meteo%20Paris/Temps-par-defaut-min.jpg")';
                        document.body.style.color = '#fff'; 
                        break;

                    }               
            }) 

