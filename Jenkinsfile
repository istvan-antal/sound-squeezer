@Library('pipeline') _

properties([
    buildDiscarder(
        logRotator(
            artifactDaysToKeepStr: '10',
            artifactNumToKeepStr: '10',
            daysToKeepStr: '10',
            numToKeepStr: '10'
        )
    ),
    disableConcurrentBuilds()
])

node('nodejs') {
    useNodeJs('10.2.1', '6.1.0')
    
    dir('build') {
        stage('checkout') {
            checkout scm
        }

        stage('npm install') {
            sh "npm install --ignore-scripts"
        }

        stage('test') {
            sh "npm test"
        }

        stage('build') {
            sh "npm run build"
        }

        /*
        stage('package mac') {
            sh 'npm run package:mac'
            dir('build/SoundSqueezer-darwin-x64') {
                sh 'zip -r SoundSqueezer.zip SoundSqueezer.app'
                archiveArtifacts 'SoundSqueezer.zip'
            }
        }*/
    }
    cleanWs()
}