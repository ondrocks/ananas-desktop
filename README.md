# Ananas Desktop

[![Build Status](https://travis-ci.org/ananas-analytics/ananas-desktop.svg?branch=master)](https://travis-ci.org/ananas-analytics/ananas-desktop)

Ananas Desktop is a hackable data integration/analysis tool to enable non technical users to edit data processing 
jobs and visualise data on demand. It is designed to be deeply customizable and approachable by different data team members (data scientist, data analyst, devops, data engineer etc.. ).

<div>
<img src="https://raw.githubusercontent.com/ananas-analytics/ananas-desktop/master/assets/ananas_dag_screen_shot.png" alt="ananas dag screenshot" width="280"/>

<img src="https://raw.githubusercontent.com/ananas-analytics/ananas-desktop/master/assets/ananas_visualization.png" alt="ananas visualization" width="280"/>

<img src="https://raw.githubusercontent.com/ananas-analytics/ananas-desktop/master/assets/ananas_engine.png" alt="ananas engine" width="280"/>
</div>

###  Features
* Drag and Drop Pipeline Editor
* Low Code (Most of the analysis & processing can be done with SQL) 
* Fail fast development process : TEST locally with sampled data in seconds before you run your pipeline on live.
* Data pipelines can be easily executed on multiple execution environments **without code change** (Spark, Flink etc..)
* Support I/O sources/destination: MongoDB, MySQL, Postgresql, Files (JSON, Plain Text, CSV and Excel). More coming soon
* Prepare data with a wide range of transformers: Union, Join, SQL, Javascript 
* Visualize data with our customizable chart builder
* Scalable - Build once, run on any volume of data
* Variable - parameterize your queries

Visit [Ananas Analytics](https://ananasanalytics.com/) to learn more.

### Supported Execution Platforms

- Local
- [Spark](https://spark.apache.org/)
- [Flink](https://flink.apache.org/)
- [Google Dataflow](https://cloud.google.com/dataflow/)

More coming soon ...

### Documentation

If you want to read about using Ananas Desktop, read our [User guide](https://ananasanalytics.com/docs/user-guide/overview).

If you are a contributor you can get started with the [Wiki Page](https://github.com/ananas-analytics/ananas-desktop/wiki), [Runner Documentation](https://github.com/ananas-analytics/ananas-desktop/blob/master/runner/README.md), 
and [Developer Guide](https://ananasanalytics.com/docs/developer-guide/overview)

### Installing
    
1. Download the latest [Ananas release](https://ananasanalytics.com/docs/downloads/overview).
2. Download the [Ananas Example](https://github.com/ananas-analytics/ananas-examples) and import them to get started.

### License

Copyright 2019 Ananas Analytics.

Licensed under the Apache License, Version 2.0: http://www.apache.org/licenses/LICENSE-2.0
