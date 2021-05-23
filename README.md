# node_core
getting started with NodeJS
1. Task 1: Read a JSON file and log the JSON string.
2. Task 2: Create an EventEmitter with event 'OnGetDataSuccess'. Read a JSON file and raise event 'OnGetDataSuccess' to log the JSON string.
3. Task 3: Create a class extends EventEmitter. Create an instance of this class to raise event 'OnGetDataSuccess' and log the JSON string.
4. Task 4: Create an instance of class B(extends EventEmitter) with event 'OnCatchData' in class A. When A reads a JSON file: for each object that A counts, raise event 'OnCatchData', B logs key and data in this object.
5. Task 5: Create 3 EvenEmitter. 1 call event 'RequestReadFile' to 2 to read a JSON file. 2 reads the file and returns the data to 1 via event 'ResponseReadFile'. 1 receives the response and send it to 3 via event 'ResponseReadFile'. 3 receives and logs the data then return 'true' value to 1 via 'ResponseReadFile'. 1 receives the value and log 'Hello Event'.
