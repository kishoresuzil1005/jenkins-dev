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

        stage('Install Dependencies') {
            steps {
                sh '''
                echo "Installing dependencies..."
                npm install
                '''
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
                    git config user.name "jenkins"
                    git config user.email "jenkins@example.com"

                    # Set authenticated remote
                    git remote set-url origin https://${GIT_USERNAME}:${GIT_TOKEN}@github.com/kishoresuzil1005/CRUD.git

                    # Fetch latest changes
                    git fetch origin

                    # Checkout destination branch (main)
                    git checkout ${DEST_BRANCH} || git checkout -b ${DEST_BRANCH}

                    # Pull latest changes to avoid non-fast-forward error
                    git pull origin ${DEST_BRANCH} --rebase || true

                    # Merge source branch (dev)
                    git merge origin/${SOURCE_BRANCH}

                    # Push to remote
                    git push origin ${DEST_BRANCH}
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
