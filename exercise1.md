# Exercise 11.1 Warming Up

I picked Python up. I have written maybe one hundred lines of code with Python.

## Tools for linting, testing and building in Python

There are several tools available which one can use when doing these tasks.

For linting some tools are e.g.  Pylint, pycodestyle and pydocstyle. All these three can be used with Visual Studio Code though only Pylint is enabled by default.

For testing some popular tools are e.g. PyUnit, Python Robot Framework and possibly the most widely use test framework PyTest. PyUnit is part of the standard Python library. Robot is easier to use than either PyTest or PyUnit.PyTest is open-source and comes with many useful features.

For building the code some tools are e.g. PyBuilder, pynt and pyinfra . PyBuilder is based on the concept of dependency-based programming but also comes alonn with powerful plugin mechanism. Pynt is a pure Python tool and tasks are just python functions. Pyinfra is super fast as massive scale.

## Alternatives to set up CI

Some alternatives for setting up the CI besided Jenkins and GitHub Actions are Buildbod, Tox and Travis-CI. Buildbod is flexible and well-suited to complex cases. Tox is a generic virtualenv management and test command line tool. Travis-CI is a distributed CI server and it integrates seamlessly with GitHub.

## Self-hosted or a cloud-based environment?

To decide whether a self-hosted solution or a cloud-based solution is a better choice we would need to know more about the complexity of the project, future needs, budget and the competencies of the team. Based on the given information I would suggest to use a cloub-based solutino because the project is rather small, it is one-time project and a cloud-based solution is usually simpler and easier to configure and use.
