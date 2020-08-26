# Project Documentation

This project aims to build a webextension for Firefox browser, that can track other Web extension in the browser

## Project Structure

- src folder
  - manifest.json
  - Project.md
- CONTRIBUTION.md
- LICENSE
- README.md

## manifest.json

It is a very important file that every extension have. In this file we keep the metadata about the extension like the name of the extension, its version, all the permissions that the extension requires etc.

You can find the manifest.json in src/manifest.json.
In the file we have defined:
- **browser_action :** It is the button/icon that your browser displays at the toolbar.

  - default_title : It is a tooltip for the button

  - deafult_popup : Here you declare the path to the popup file. The file is a HTML file.

- **description :** A small desciption about the extension.

- **manifest_version :** It defines the version of the manifest file that the extension uses. Currently, this always needs to be 2.

- **name :** Name for the extension. (Length <= 45 characters)

- **version :** The current version of the extension.

- **options_ui :** Used to define the options page for the extension.

  - page : Path to the options.html file, where the user can change the preferences for the extension.

- **permissions :** All the permissions that your extension will require to work smoothly. It is an array of strings.

- **background :** Here you can define the background scripts that needs to maintain a long-term state.

  - scripts : The scripts that will load when the extension is enabled/loaded and will remain loaded untill the extension is removed or disabled.

  - persistent : A boolean field.

    - True, indicates that the background page needs to be kept in the memory until the extension is unloaded or disabled.

    - False, indicates that the backgroud page can be unloaded from the memory when idle and recreated when needed again. 
