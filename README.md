# Tag Libraries Development Tools

## Requirements
- Java (version 1.5 or higher) your computer should have Java already installed, if not, download it from https://www.java.com/en/download/
- Git, no specific version required here. Your installation should have command line tools for git - those are standard option during Git installation, you can download git from http://git-scm.com/downloads

## Extra notes
Please associate your favourite editor for javascript files - application will use it to open the javascript files when clicking "edit" buttons.


## Building Tag Library(ies)
Build system is based on plain files and is using miniMerge tool for simple dependency management (see https://github.com/QubitProducts/miniMerge for more details). Any directory or file specified by build will cause the build program to find all *.js files, analyse any dependencies defined in files and include them into build output. Paths with names "dist" and "build" will be ignored by build system and by Git (see what is ignored in .gitignore file).

To build tag library, entire vondor's libraries directory or all of the libraries, specify path to the resource as in the example below:

```
java -jar shared/bin/LibraryWizard.jar --build-and-run libraries/vendor_name
```

If your system support unix commandline, you may use shell script:

```
shared/bin/build.sh libraries/vendor_name
```

To see more information on wizard tool, simply run:

```
java -jar shared/bin/LibraryWizard.jar
```

