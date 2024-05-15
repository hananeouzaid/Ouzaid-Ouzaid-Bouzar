<script>
            function afficherCommande() {
                var platsSelectionnes = [];
                var total = 0;
    
                
                var checkboxes = document.querySelectorAll('input[type="checkbox"]');
                checkboxes.forEach(function(checkbox) {
                    if (checkbox.checked) {
                        platsSelectionnes.push(checkbox.getAttribute('name'));
                        total += parseInt(checkbox.getAttribute('data-prix'));
                    }
                });
    
                var commandeDiv = document.getElementById('commande');
                if (platsSelectionnes.length > 0) {
                    commandeDiv.innerHTML = '<h2>Votre commande :</h2><p>Plats : ' + platsSelectionnes.join(', ') + '</p><p>Prix total : $' + total + '</p><button onclick="confirmerCommande()">Confirmer la commande</button>';
                } else {
                    commandeDiv.innerHTML = '<p>Veuillez sélectionner au moins un plat.</p>';
                }
            }
    
            function confirmerCommande() {
                
                alert('Commande confirmée !');
            }
        </script>