# HModal

Simple modal window. Easy to use.

## HModal Usage
### Include

Put the required stylesheet at the top of your markup:
```html
<link rel="stylesheet" href="dist/css/hmodal.css">
```

Put the script at the bottom of your markup:
```html
<script src="dist/js/hmodal.min.js"></script>
```

### Usage

First, add the required modal button markup to the page:
```html
<button class="hmodal-button" data-target="#modalExample">Open example modal</button>
```

then add the markup of the modal window itself:

```html
<div class="hmodal hmodal-slide" id="modalExample">
  <div class="hmodal-inner">
    <div class="hmodal-header">
      <div class="hmodal-title">Modal title</div>
      <button class="hmodal-close-icon hmodal-close">x</button>
    </div>
    <div class="hmodal-body">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="hmodal-footer">
      <button class="hmodal-close-btn hmodal-close">Close</button>
    </div>
  </div>
</div>
```

Call the plugin function when your DOM is ready:
```javascript
document.addEventListener("DOMContentLoaded", function() {
  new HModal();
})
```

or with custom options:
```javascript
document.addEventListener("DOMContentLoaded", function() {
  new HModal({
    btnInitSelector: '.hmodal-button'
  });
})
```

and your modal window is ready)

## Customization

You can change the look with css as you like. More detailed settings coming soon.

## License

The code and the documentation are released under the [MIT License](LICENSE).