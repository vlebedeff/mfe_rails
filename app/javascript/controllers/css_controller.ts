import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="favorite-toggle"
export default class CssController extends Controller {
  static targets = ["elementToChange"]
  elementToChangeTarget: HTMLElement

  static classes = ["css"]
  cssClasses: string

  static values = { status: Boolean }
  statusValue: boolean

  toggle(): void {
    this.flipState()
  }

  statusValueChanged(value: boolean, previousValue: boolean): void {
    this.updateCssClass()
  }

  flipState(): void {
    this.statusValue = !this.statusValue
  }

  updateCssClass(): void {
    for (const cssClass of this.cssClasses) {
      console.log("will update", cssClass, this.statusValue)
      this.elementToChangeTarget.classList.toggle(
        cssClass,
        this.statusValue
      )
    }
  }
}
