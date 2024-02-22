pipeline {
    agent any
    triggers {
        // Configuration du déclenchement du pipeline lorsqu'un push est détecté dans le référentiel Git
        pollSCM cron: '* * * * *'
    }
    stages {
        stage('Récupération du code source') {
            steps {
                // Cette étape clone le référentiel Git
                git 'https://github.com/yourname/jenkinsProject.git'
            }
        }
 
        stage('Affichage de la date système') {
            steps {
                // Cette étape affiche la date système
                script {
                    def date = sh(script: 'date', returnStdout: true).trim()
                    echo "La date système est : ${date}"
                }
            }
        }
    }
}


