export type Listener = (state: any) => any

export class Emitter {
  private state: any = null
  private listeners: Listener[] = []

  constructor(state) {
    this.state = state
  }

  /**
   * Publishes a new state and triggers all
   * the listeners
   * 
   * @param newState The new state
   */
  public publish(newState: any): void {
    this.state = newState

    this.listeners.forEach(listener => {
      
      if(listener) listener(this.state)

    })
  }

  /**
   * Adds a function to the list of listeners that
   * get called on every state update
   * 
   * @param fn Function to be called on updates
   * @returns id The id of the new listener
   */
  public subscribe(fn: Listener): number {
    return this.listeners.push(fn) - 1
  }

  /**
   * Removes a listener by the given id
   * 
   * @param id The id of the listener
   */
  public unsubscribe(id: number): void {
    delete this.listeners[id]
  }
}