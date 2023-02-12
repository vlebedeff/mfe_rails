import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="favorite-toggle"
export default class FavoriteToggleController extends Controller {
  connect(): void {
    console.log("Favorite Toggle controller is connected")
  }
}
