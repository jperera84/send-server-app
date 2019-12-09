const app = () => {
    console.log('My App');
    const eventSource = new EventSource('http://localhost:3000/received');

    // Handler for events without an event type specified
    eventSource.onmessage = (e) => {      
        if (e.lastEventId === '-1') {
          // This is the end of the stream
          eventSource.close();
        } else {
          // Process message that isn't the end of the stream...
          console.log(e.data);
        }  
    };

    eventSource.addEventListener('eventType', (e) => {
        // Do something - event data will be in e.data,
        // message will be of type 'eventType'
        console.log(e.data);
    });
};

app();