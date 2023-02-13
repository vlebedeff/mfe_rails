import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="favorite-toggle"
export default class FavoriteToggleController extends Controller {
  static targets = ["elementToHide"]
  elementToHideTarget: HTMLElement

  toggle(): void {
    console.log("Click!")
    this.elementToHideTarget.classList.toggle("hidden")
  }
}
