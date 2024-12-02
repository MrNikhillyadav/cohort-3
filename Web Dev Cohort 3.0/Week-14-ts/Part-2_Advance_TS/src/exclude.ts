type EventType = 'click'|'scroll' | 'mousemove'
type ExcludedEvent = Exclude<EventType, 'scroll'>;

function handle(event : ExcludedEvent){
          console.log(event)
}


handle('mousemove')