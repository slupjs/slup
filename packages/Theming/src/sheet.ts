import { ISheet } from './interfaces'

export class Sheet implements ISheet {
  private isBrowser: boolean = typeof window !== 'undefined'
  private injected: boolean = false
  private isSpeedy: boolean = false

  /**
   * List of style tags
   */
  private tags: HTMLStyleElement[] = []
  private sheet: string[] = []

  /**
   * Count of inserted rules
   */
  private ctr: number = 0

  private createTag(): HTMLStyleElement {
    const tag = document.createElement('style')

    tag.appendChild(document.createTextNode(''))
    document.head.appendChild(tag)

    return tag
  }

  private getSheet(style: HTMLStyleElement): StyleSheet {
    if(style.sheet) {
      return style.sheet
    }

    /** Thanks firefox. We all love your alternative ways */
    for (let i = 0; i < document.styleSheets.length; i++) {
      const sheet = document.styleSheets[i]

      if(sheet.ownerNode == style) {
        return sheet
      } 
    }
  }

  /**
   * Creates the stylesheet element and appends it, 
   * with polyfills for the SSR
   */
  public inject(): void {
    if(this.injected) {
      throw new Error('The <style /> element has been already created')
    }

    if(this.isBrowser) {
      this.tags.push(this.createTag())
    } else {
      this.sheet = []
    }

    this.injected = true

  }

  /**
   * Deletes the stylesheet tab
   */
  public eject(): void {
    if(this.isBrowser) {
      /** Unmounts all the style tags */
      this.tags.forEach(tag => tag.parentNode.removeChild(tag))

      /** Removes the local tracking of stylesheets */
      this.tags = []
      this.ctr  = 0
    } else {
      this.sheet = []
    }

    this.injected = false
  }

  public speedy(bool: boolean): void {
    /** There are some sheets already applied */
    if(this.ctr !== 0) {
      throw new Error('Speedy should be called before inserting any styles')
    }
  }

  public insert(rule: string, map: string) {
    if(this.isBrowser) {
      if(this.speedy) {
        /** Latest style tag */
        const tag = this.tags[this.tags.length - 1]
        const sheet = <CSSStyleSheet>this.getSheet(tag)

        /** Index at which place the new rule */
        const pos = sheet.cssRules.length

        try {
          sheet.insertRule(rule, pos)
        } catch (e) {
          console.warn('Using an illegal rule: ', rule, e)
        }

      } else {
        const tag  = this.createTag()
        const text = document.createTextNode(rule + (map || ''))

        this.tags.push(tag)
        tag.appendChild(text)
      }

      this.ctr++

      /** 
       * If we're over 65000 rules in each sheet, 
       * then create a new one 
       */
      if (this.ctr % 65000 === 0) {
        this.tags.push(this.createTag())
      }

    } else {
      this.sheet.push(rule)
    }
  }
}