pipeline {
    agent any

    environment {
        SOURCE_BRANCH = "dev"
        DEST_BRANCH = "main"
        REPO_URL = "https://github.com/kishoresuzil1005/jenkins-dev.git"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: "${SOURCE_BRANCH}",
                    url: "${REPO_URL}",
                    credentialsId: 'github-access-token'
            }
        }

        stage('Sync Dev to Main') {
    steps {
        withCredentials([usernamePassword(
            credentialsId: 'github-access-token',
            usernameVariable: 'GIT_USERNAME',
            passwordVariable: 'GIT_TOKEN'
        )]) {

            sh '''
            echo "Syncing dev → main (NO MERGE)"

            git config user.name "jenkins"
            git config user.email "jenkins@example.com"

            git remote set-url origin https://${GIT_USERNAME}:${GIT_TOKEN}@github.com/kishoresuzil1005/jenkins-dev.git

            git fetch origin

            # Checkout dev
            git checkout dev

            # Create/reset main from dev
            git checkout -B main

            # Force push (overwrite main)
            git push origin main --force
            '''
        }
    }
}
}
    post {
        success {
            echo "✅ Pipeline completed successfully"
        }
        failure {
            echo "❌ Pipeline failed"
        }
    }
}
