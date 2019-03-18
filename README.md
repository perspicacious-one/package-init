## Setup Instructions

1. Clone the repository
```console
git clone git@github.com:perspicacious-one/project-init.git
```

2. Navigate to the repository directory
```console
cd package-init
```
3. Install any dependencies
```console
npm install
```

4. Install the package globally
```console
npm install -g ./
```

Done! Now when you want to start a new project, type `project-init` in the new project directory and follow the prompts.

## Extend & Customize

You can add, remove, or change any of the files to suit your needs. Files in the `/lib/common` directory will be placed in every project.

If you want more project options simply create a project type folder (e.g. - 'vue') in the `/lib` directory, then place the files you want to be populated in the new folder.
