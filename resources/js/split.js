import Alpine from 'alpinejs';
import JSZip from 'jszip';

function data() {
    return {
        file: null,
        imgUrl: null,
        tipo: 'grade',
        linhas: 1,
        colunas: 1,
        pecas: [],
        selecionadas: new Set(),
        canvas: null,

        onFileChange(event) {
            const file = event.target.files[0] || (event.dataTransfer && event.dataTransfer.files[0]);
            if (!file) return;
            this.file = file;
            const reader = new FileReader();
            reader.onload = e => {
                this.imgUrl = e.target.result;
                if (!this.canvas) {
                    this.canvas = document.createElement('canvas');
                }
                const img = new Image();
                img.onload = () => {
                    this.canvas.width = img.width;
                    this.canvas.height = img.height;
                    const ctx = this.canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0);
                    this.$nextTick(() => {
                        this._syncOverlaySize();
                        this.drawOverlay();
                    });
                };
                img.src = this.imgUrl;
            };
            reader.readAsDataURL(file);
        },

        _syncOverlaySize() {
            const overlayCanvas = this.$refs.overlayCanvas;
            if (!overlayCanvas) return;
            const img = this.$refs.previewImg;
            if (!img) return;
            const dpr = window.devicePixelRatio || 1;
            overlayCanvas.width = img.offsetWidth * dpr;
            overlayCanvas.height = img.offsetHeight * dpr;
            const ctx = overlayCanvas.getContext('2d');
            ctx.scale(dpr, dpr);
        },

        drawOverlay() {
            const overlayCanvas = this.$refs.overlayCanvas;
            if (!overlayCanvas) return;
            const img = this.$refs.previewImg;
            if (!img) return;

            const ctx = overlayCanvas.getContext('2d');
            ctx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);

            const w = img.offsetWidth;
            const h = img.offsetHeight;

            let rows = this.linhas;
            let cols = this.colunas;
            if (this.tipo === 'vertical') {
                cols = 1;
            } else if (this.tipo === 'horizontal') {
                rows = 1;
            }

            ctx.strokeStyle = '#ff8c42';
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 5]);

            const colWidth = w / cols;
            for (let c = 1; c < cols; c++) {
                const x = c * colWidth;
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, h);
                ctx.stroke();
            }

            const rowHeight = h / rows;
            for (let r = 1; r < rows; r++) {
                const y = r * rowHeight;
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(w, y);
                ctx.stroke();
            }
        },

        updateOverlay() {
            this._syncOverlaySize();
            this.drawOverlay();
        },

        generatePreview() {
            if (!this.imgUrl) return;
            const img = new Image();
            img.onload = () => {
                const imageWidth = img.width;
                const imageHeight = img.height;
                let rows = this.linhas;
                let cols = this.colunas;
                if (this.tipo === 'vertical') {
                    cols = 1;
                } else if (this.tipo === 'horizontal') {
                    rows = 1;
                }
                const pieceW = Math.floor(imageWidth / cols);
                const pieceH = Math.floor(imageHeight / rows);
                this.pecas = [];
                this.selecionadas.clear();

                const ctx = this.canvas.getContext('2d');
                for (let r = 0; r < rows; r++) {
                    for (let c = 0; c < cols; c++) {
                        const x = c * pieceW;
                        const y = r * pieceH;
                        const canvas2 = document.createElement('canvas');
                        canvas2.width = pieceW;
                        canvas2.height = pieceH;
                        const ctx2 = canvas2.getContext('2d');
                        ctx2.drawImage(this.canvas, x, y, pieceW, pieceH, 0, 0, pieceW, pieceH);
                        const dataUrl = canvas2.toDataURL('image/png');
                        const name = `piece_${r}_${c}.png`;
                        const aspectRatio = pieceW / pieceH;
                        this.pecas.push({ url: dataUrl, name, aspectRatio });
                        this.selecionadas.add(this.pecas.length - 1);
                    }
                }
            };
            img.src = this.imgUrl;
        },

        toggleSelect(index) {
            if (this.selecionadas.has(index)) {
                this.selecionadas.delete(index);
            } else {
                this.selecionadas.add(index);
            }
        },

        async downloadZip() {
            const zip = new JSZip();
            const indices = Array.from(this.selecionadas);
            for (const i of indices) {
                const piece = this.pecas[i];
                const data = piece.url.split(',')[1];
                zip.file(piece.name, data, { base64: true });
            }
            const blob = await zip.generateAsync({ type: 'blob' });
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = 'images.zip';
            a.click();
        }
    };
}

window.splitComponent = data;
Alpine.data('splitComponent', data);

Alpine.start();
