//your JS code here. If required.
function createRandomPromise(index) {
            return new Promise((resolve) => {
                const timeTaken = Math.random() * 2 + 1; // random time between 1 and 3 seconds
                setTimeout(() => resolve({ index: index + 1, time: timeTaken.toFixed(3) }), timeTaken * 1000);
            });
        }

// Array of 3 promises
        const promises = [
            createRandomPromise(0),
            createRandomPromise(1),
            createRandomPromise(2)
        ];

        const startTime = Date.now();

 Promise.all(promises).then((results) => {
            const totalTime = ((Date.now() - startTime) / 1000).toFixed(3);

            // Remove the loading row
            document.getElementById("loadingRow").remove();

            const output = document.getElementById("output");

            // Populate the table with results
            results.forEach(result => {
                const row = document.createElement("tr");
                row.innerHTML = `<td>Promise ${result.index}</td><td>${result.time} seconds</td>`;
                output.appendChild(row);
            });
	 // Add the total time row
            const totalRow = document.createElement("tr");
            totalRow.innerHTML = `<td>Total</td><td>${totalTime} seconds</td>`;
            output.appendChild(totalRow);
        });
	 