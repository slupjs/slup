import { INSERTED, REGISTERED, sheet } from './styles'
import { ISSR, IPrivateData, IData } from '../interfaces'

export const SSR = new class SSR implements ISSR {
  /**
   * Private data for processing on extraction time
   */
  private local: IPrivateData = {
    html: '',
    css: '',
    ids: [],
    rules: []
  }

  /** RegExp to find rules/general css */
  private RGX = /css(?:[a-zA-Z0-9-]*)-([a-zA-Z0-9]+)/gm

  /**
   * Object storing all the public data
   * that will be returned on extracting
   */
  public data = { 
    html: '', 
    css: '',
    ids: []
  }

  /**
   * Parses the html code and returns a list of precompiled
   * css and ids to be used with SSR in Inferno
   * 
   * @param html Html from renderToString
   */
  public extract(html: string): IData {
    let match: any = null  

    /** Loop for all CSS classes */
    while((match = this.RGX.exec(html))) {
      /** 
       * Note that this particular match(rule) has been parsed 
       */
      if(!this.local.ids[match[1]]) {
        this.local.ids[match[1]] = true
      }
    }

    this.local.rules = sheet.sheet.slice().filter(rule => {
      this.RGX.lastIndex = 0  
      
      /** Double check if this sheet is a valid css */
      const _match = this.RGX.exec(rule)

      return _match == null /** If the sheet isn't valid, return false */
        || this.local.ids[_match[1]] /** Return the sheet(if valid) */
        || false /** Fallback to false */
    })

    this.data.ids = Object.keys(INSERTED) /** Clone the INSERTED Object */
      .filter(id => !!this.local.ids[id] || !REGISTERED[`css-${id}`])
  
    this.data.css  = this.local.rules.join('')
    this.data.html = html

    const copy = this.data

    /** Reset the datas */
    this.local = { html: '', css: '', ids: [], rules: [] }
    this.data  = { html: '', css: '', ids: [] }

    return copy
  }
}