# PDC - Pauliceia Docker Compose.

This repository contains the Docker compose file to Pauliceia project.

Run the Docker compose file:

```
$ docker-compose -f docker-compose.dev.yml up
```


## Run Docker compose file for the first time

When you run the Docker compose file for the first time, you need to configure somethings.



### Database

Create `pauliceia` and `pauliceia_test` databases


### Geoserver

On this section you are going to configure Geoserver service.

Open Geoserver application with the following link and enter your credentials.

```
http://localhost:8080/geoserver/
```

Go to Data > Workspaces and add two new workspaces.

- First:
    - Name: pauliceia (default)
    - Namespace URI: pauliceia
    - Check Default Workspace.

- Second:
    - Name: other
    - Namespace URI: other

Go to Data > Stores and add two new stores using PostGIS Database option, one to each database (i.e. `pauliceia` and `pauliceia_test`).

- Basic Store Info
    - Workspace: pauliceia
    - Data Source Name: [ pauliceia | pauliceia_test ]
    - Let `Enabled` option checked
- Connection Parameters
    - Host: pauliceia_postgis
    - Port: 5432
    - Database: [ pauliceia | pauliceia_test ]
    - Schema: public
    - User and password add what you defined by using the environment variables (i.e. `POSTGRES_USER` and `POSTGRES_PASS`)

Save the Store and you will be redirect to New Layer page. On this page, press publish to all layers you want.

When you press to publish, you are redirect to Edit Layer page. On this page, fill Name and Title options (or leave default options). On Coordinate Reference Systems section, check if SRS data are correct, if they are not, then correct them. On Bounding Boxes section, press `Compute from data` and `Compute from native bounds` options to compute bounding boxes and click on Save button.

To publish other layers, go to Data > Layers, click on `add new layer`, select the store and continue the previous procedure.


# TODO

Create data store:

PostGIS

Add database information
