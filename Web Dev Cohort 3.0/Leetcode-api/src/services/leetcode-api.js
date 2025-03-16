// src/services/leetcode-api.js
const { GraphQLClient, gql } = require('graphql-request');
require('dotenv').config();
const cache = require('./cache');

// LeetCode GraphQL endpoint
const endpoint = 'https://leetcode.com/graphql';
const client = new GraphQLClient(endpoint);

// Set headers if needed for authentication
client.setHeaders({
    Cookie: `LEETCODE_SESSION=${process.env.LEETCODE_SESSION}; csrftoken=${process.env.CSRF_TOKEN}`,
    'X-Requested-With': 'XMLHttpRequest',
    Referer: 'https://leetcode.com',
    Origin: 'https://leetcode.com'
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
    
    const variables = { username }; // Define variables here
    const result = await client.request(query, variables);
    cache.set(cacheKey, result);
    return result;
}

async function getProblemsSolved(username) {
    const cacheKey = `problems_solved_${username}`; // Fixed cache key to be unique
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
    
    const variables = { username }; // Define variables here
    const result = await client.request(query, variables);
    cache.set(cacheKey, result);
    return result;
}

async function getSubmissions(username) {
    const cacheKey = `submissions_${username}`; // Fixed cache key to be unique
    const cachedData = cache.get(cacheKey);
    
    if (cachedData) {
      return cachedData;
    }

    const query = gql`
        query userSubmissions($username: String!) {
            recentSubmissionList(username: $username) {
                id
                title
                titleSlug
                timestamp
                statusDisplay
                lang
            }
        }
    `;
    
    const variables = { username }; // Define variables here
    const result = await client.request(query, variables);
    cache.set(cacheKey, result);
    return result;
}

async function getActiveYears(username) {
    const cacheKey = `active_years_${username}`; // Fixed cache key to be unique
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
    
    const variables = { username }; // Define variables here
    const result = await client.request(query, variables);
    cache.set(cacheKey, result);
    return result;
}

async function getContestsAttended(username) {
    const cacheKey = `contests_${username}`; // Fixed cache key to be unique
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
    
    const variables = { username }; // Define variables here
    const result = await client.request(query, variables);
    cache.set(cacheKey, result);
    return result;
}

async function getUserBadges(username) {
    const cacheKey = `badges_${username}`; // Fixed cache key to be unique
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
    
    const variables = { username }; // Define variables here
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