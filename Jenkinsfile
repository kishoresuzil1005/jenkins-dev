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
                    echo "Syncing ${SOURCE_BRANCH} → ${DEST_BRANCH}"

                    git config user.name "jenkins"
                    git config user.email "jenkins@example.com"

                    git remote set-url origin https://${GIT_USERNAME}:${GIT_TOKEN}@github.com/kishoresuzil1005/jenkins-dev.git

                    git fetch origin

                    # ✅ Use SOURCE_BRANCH variable
                    git checkout ${SOURCE_BRANCH}

                    # ✅ Use DEST_BRANCH variable
                    git checkout -B ${DEST_BRANCH}

                    # ✅ Push using variable
                    git push origin ${DEST_BRANCH} --force
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
