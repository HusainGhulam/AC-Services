# Deployment Guide

This guide will help you deploy the AC ServiceCare website to various platforms.

## 🚀 Quick Deploy Options

### 1. GitHub Pages (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as source
   - The workflow will automatically deploy on push

3. **Your site will be available at**
   `https://yourusername.github.io/your-repo-name`

### 2. Vercel (Alternative)

1. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect the Vite configuration

2. **Deploy settings**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### 3. Netlify (Alternative)

1. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Import your GitHub repository

2. **Build settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

## 🔧 Manual Deployment

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory.

### Test Production Build Locally
```bash
npm run preview
```

## 📝 Environment Variables

If you need to add environment variables:

1. Create a `.env` file (already in .gitignore)
2. Add your variables:
   ```
   VITE_API_URL=your_api_url
   VITE_CONTACT_EMAIL=your_email
   ```

## 🔄 Continuous Deployment

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that will:
- Build the project on every push to main
- Deploy to GitHub Pages automatically
- Run on pull requests for testing

## 🛠️ Troubleshooting

### Build Issues
- Make sure all dependencies are installed: `npm install`
- Clear cache: `npm run build -- --force`
- Check for TypeScript errors: `npm run lint`

### Deployment Issues
- Verify the build output in `dist/` directory
- Check GitHub Actions logs for errors
- Ensure repository has proper permissions

## 📞 Support

For deployment issues, check:
1. GitHub Actions logs
2. Build output in terminal
3. Browser console for runtime errors

---

**FAC Enterprises** - Professional AC Services 