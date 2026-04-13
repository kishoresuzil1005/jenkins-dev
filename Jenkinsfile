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

        stage('Merge to Destination Branch') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'github-access-token',
                    usernameVariable: 'GIT_USERNAME',
                    passwordVariable: 'GIT_TOKEN'
                )]) {

                    sh '''
                    echo "Starting merge process..."

                    git config user.name "jenkins"
                    git config user.email "jenkins@example.com"

                    git remote set-url origin https://${GIT_USERNAME}:${GIT_TOKEN}@github.com/kishoresuzil1005/jenkins-dev.git

                    git fetch origin

                    # Create main branch if not exists
                    git checkout main || git checkout -b main

                    # Push main if not exists remotely
                    git push origin main || true

                    # Pull latest main (if exists)
                    git pull origin main --rebase || true

                    # Merge dev → main (FIRST TIME FIX)
                    git merge origin/dev --allow-unrelated-histories -m "Merging dev into main"

                    # Push final changes
                    git push origin main
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
