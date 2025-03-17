// src/services/leetcode-api.js
const { GraphQLClient, gql } = require('graphql-request');
const cache = require('./cache');

// LeetCode GraphQL endpoint
const endpoint = 'https://leetcode.com/graphql';
const client = new GraphQLClient(endpoint);

// Basic headers for public API access
client.setHeaders({
    'Content-Type': 'application/json',
    'User-Agent': 'LeetCode Profile Fetcher'
});

async function getUserInfo(username) {
    const cacheKey = `user_info_${username}`;
    const cachedData = cache.get(cacheKey);
    
    if (cachedData) {
      return cachedData;
    }

    const query = gql`
        query userPublicProfile($username: String!) {
            matchedUser(username: $username) {
                username
                profile {
                    realName
                    websites
                    countryName
                    company
                    school
                    starRating
                    aboutMe
                    userAvatar
                    skillTags
                    ranking
                }
            }
        }
    `;
    
    const variables = { username };
    const result = await client.request(query, variables);
    cache.set(cacheKey, result);
    return result;
}

async function getProblemsSolved(username) {
    const cacheKey = `problems_solved_${username}`;
    const cachedData = cache.get(cacheKey);
    
    if (cachedData) {
      return cachedData;
    }

    const query = gql`
        query userProblemsSolved($username: String!) {
            matchedUser(username: $username) {
                submitStats {
                    acSubmissionNum {
                        difficulty
                        count
                    }
                    totalSubmissionNum {
                        difficulty
                        count
                    }
                }
            }
        }
    `;
    
    const variables = { username };
    const result = await client.request(query, variables);
    cache.set(cacheKey, result);
    return result;
}

async function getSubmissions(username) {
    const cacheKey = `submissions_${username}`;
    const cachedData = cache.get(cacheKey);
    
    if (cachedData) {
      return cachedData;
    }

    const query = gql`
        query userSubmissions($username: String!) {
            recentSubmissionList(username: $username, limit: 20) {
                id
                title
                titleSlug
                timestamp
                statusDisplay
                lang
            }
        }
    `;
    
    const variables = { username };
    const result = await client.request(query, variables);
    cache.set(cacheKey, result);
    return result;
}

async function getActiveYears(username) {
    const cacheKey = `active_years_${username}`;
    const cachedData = cache.get(cacheKey);
    
    if (cachedData) {
      return cachedData;
    }

    const query = gql`
        query userCalendar($username: String!) {
            matchedUser(username: $username) {
                userCalendar {
                    activeYears
                    streak
                    totalActiveDays
                }
            }
        }
    `;
    
    const variables = { username };
    const result = await client.request(query, variables);
    cache.set(cacheKey, result);
    return result;
}

async function getContestsAttended(username) {
    const cacheKey = `contests_${username}`;
    const cachedData = cache.get(cacheKey);
    
    if (cachedData) {
        return cachedData;
    }

    const query = gql`
        query userContestRanking($username: String!) {
            userContestRanking(username: $username) {
                attendedContestsCount
                globalRanking
                rating
                topPercentage
            }
        }
    `;
    
    const variables = { username };
    const result = await client.request(query, variables);
    cache.set(cacheKey, result);
    return result;
}

async function getUserBadges(username) {
    const cacheKey = `badges_${username}`;
    const cachedData = cache.get(cacheKey);
    
    if (cachedData) {
        return cachedData;
    }

    const query = gql`
        query userBadges($username: String!) {
            matchedUser(username: $username) {
                badges {
                    id
                    displayName
                    icon
                    creationDate
                }
            }
        }
    `;
    
    const variables = { username };
    const result = await client.request(query, variables);
    cache.set(cacheKey, result);
    return result;
}

module.exports = {
    getUserInfo,
    getProblemsSolved,
    getSubmissions,
    getActiveYears,
    getContestsAttended,
    getUserBadges
};