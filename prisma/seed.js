const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Clear existing data (optional - comment out if you want to keep existing data)
  await prisma.article.deleteMany();
  console.log('🗑️  Cleared existing articles');

  // Create root level articles
  const article1 = await prisma.article.create({
    data: {
      title: 'Getting Started with Web Development',
      slug: 'getting-started-web-dev',
      content: 'Learn the basics of web development including HTML, CSS, and JavaScript.',
    },
  });

  const article2 = await prisma.article.create({
    data: {
      title: 'Database Design Fundamentals',
      slug: 'database-design-fundamentals',
      content: 'Understanding relational databases and how to design efficient schemas.',
    },
  });

  const article3 = await prisma.article.create({
    data: {
      title: 'Advanced Topics',
      slug: 'advanced-topics',
      content: 'Explore advanced programming concepts and design patterns.',
    },
  });

  console.log('✅ Created root articles');

  // Create child articles for "Getting Started with Web Development"
  const child1_1 = await prisma.article.create({
    data: {
      title: 'HTML Basics',
      slug: 'html-basics',
      content: 'Introduction to HTML tags, elements, and document structure.',
      parentId: article1.id,
    },
  });

  const child1_2 = await prisma.article.create({
    data: {
      title: 'CSS Styling',
      slug: 'css-styling',
      content: 'Learn how to style your web pages with CSS.',
      parentId: article1.id,
    },
  });

  const child1_3 = await prisma.article.create({
    data: {
      title: 'JavaScript Introduction',
      slug: 'javascript-intro',
      content: 'Get started with JavaScript programming fundamentals.',
      parentId: article1.id,
    },
  });

  console.log('✅ Created child articles for Web Development');

  // Create grandchild articles under "HTML Basics"
  await prisma.article.create({
    data: {
      title: 'HTML Forms',
      slug: 'html-forms',
      content: 'Creating interactive forms with input fields and buttons.',
      parentId: child1_1.id,
    },
  });

  await prisma.article.create({
    data: {
      title: 'Semantic HTML',
      slug: 'semantic-html',
      content: 'Using semantic tags for better accessibility and SEO.',
      parentId: child1_1.id,
    },
  });

  console.log('✅ Created grandchild articles');

  // Create child articles for "Database Design"
  await prisma.article.create({
    data: {
      title: 'SQL Basics',
      slug: 'sql-basics',
      content: 'Learn SQL queries for database operations.',
      parentId: article2.id,
    },
  });

  await prisma.article.create({
    data: {
      title: 'Normalization',
      slug: 'normalization',
      content: 'Understanding database normalization principles.',
      parentId: article2.id,
    },
  });

  await prisma.article.create({
    data: {
      title: 'Indexing Strategies',
      slug: 'indexing-strategies',
      content: 'Optimize query performance with proper indexing.',
      parentId: article2.id,
    },
  });

  console.log('✅ Created child articles for Database Design');

  // Create child articles for "Advanced Topics"
  const child3_1 = await prisma.article.create({
    data: {
      title: 'Design Patterns',
      slug: 'design-patterns',
      content: 'Common software design patterns and when to use them.',
      parentId: article3.id,
    },
  });

  await prisma.article.create({
    data: {
      title: 'Performance Optimization',
      slug: 'performance-optimization',
      content: 'Techniques for improving application performance.',
      parentId: article3.id,
    },
  });

  // Create grandchild under "Design Patterns"
  await prisma.article.create({
    data: {
      title: 'Singleton Pattern',
      slug: 'singleton-pattern',
      content: 'Understanding and implementing the singleton pattern.',
      parentId: child3_1.id,
    },
  });

  await prisma.article.create({
    data: {
      title: 'Factory Pattern',
      slug: 'factory-pattern',
      content: 'Creating objects using the factory pattern.',
      parentId: child3_1.id,
    },
  });

  console.log('✅ Created advanced topic articles');

  // Count total articles
  const count = await prisma.article.count();
  console.log(`\n📊 Total articles created: ${count}`);
  
  console.log('🎉 Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });