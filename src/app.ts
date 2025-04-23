import express from 'express';
import { ProdutoRepository } from './repository/ProdutoRepository';
import { ProdutoService } from './service/ProdutoService';
import { ProdutoController } from './controller/ProdutoController';
import { produtoRotas } from './routes/ProdutoRouter';
import { AppDataSource } from './data-source';
import { Produto } from './model/Produto';

AppDataSource.initialize().then(async => {
  const app = express();
  app.use(express.json());

  // Initialize dependencies
  const produtoRepository = AppDataSource.getRepository(Produto);
  const produtoService = new ProdutoService(produtoRepository);
  const produtoController = new ProdutoController(produtoService);

  // Routes
  app.use('/api/produtos', produtoRotas(produtoController));

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});