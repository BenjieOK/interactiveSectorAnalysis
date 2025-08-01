const sectorData = {
            gaming: {
                name: "Gaming & Gambling",
                overview: {
                    merchants: 40,
                    collections: 17.59e9,
                    withdrawals: 3.44e9,
                    withdrawalRate: 0.1955,
                },
                collections: {
                    monthly: { Jan: 2.5e9, Feb: 2.6e9, Mar: 2.9e9, Apr: 3.05e9, May: 3.14e9, Jun: 2.4e9, Jul: 1.08e9 },
                    topPerformers: "SportyBet (76%), MSPORT (8.8%), and Betway (7.9%) account for ~93% of all inflows.",
                    seasonality: "Collections peaked in April-May, aligning with European football season finales, with a subsequent lull in the off-season."
                },
                withdrawals: {
                    methods: { bank: 3.40e9, momo: 50e6 },
                    peakMonth: "January (GHS 725M), likely driven by large pre-AFCON cashouts.",
                    behavior: "Bank transfers are the critical settlement path for high-value sweeps (98.6%), while MoMo is used for smaller, operational needs. Sweeps cluster on Mondays and Fridays."
                },
                services: {
                    invoicing: 2.5,
                    sms: 15,
                    payments: 37,
                },
                insights: "This sector is defined by extreme revenue concentration. The business is highly seasonal and dependent on major sporting events. While collections are massive, only 19% is withdrawn, leaving a significant float on the platform. The primary need is for reliable, high-volume API and bank settlement channels."
            },
            financial: {
                name: "Financial Services",
                overview: {
                    merchants: 163,
                    collections: 2.59834337667e9,
                    withdrawals: 2.022229738e9,
                    withdrawalRate: 0.778,
                },
                collections: {
                    monthly: { Jan: 350e6, Feb: 380e6, Mar: 420e6, Apr: 450e6, May: 430e6, Jun: 400e6, Jul: 170e6 },
                    topPerformers: "UMB Bank (31.53%), Universal Merchant Bank (29.69%), Sinapi Aba Savings & Loans (14.76%).",
                    seasonality: "Collections remained strong and consistent through the first half of the year, peaking in April before a slight moderation."
                },
                withdrawals: {
                    methods: { bank: 593.8e6, momo: 1.43e9 },
                    peakMonth: "Follows collection peaks, with ~78% of all collected funds withdrawn.",
                    behavior: "Mobile Money is the dominant withdrawal channel by value (71%), used for high-frequency micro-withdrawals. Bank transfers are used for larger, batched payouts."
                },
                services: {
                    invoicing: 8,
                    sms: 9,
                    payments: 40,
                },
                insights: "This sector has a high number of merchants and significant transaction volume. The heavy reliance on MoMo for withdrawals indicates a need for robust, high-frequency payout solutions. There's an opportunity to grow service adoption (Invoicing, SMS) which is currently low."
            },
            professional: {
                name: "Professional Services",
                overview: {
                    merchants: 664,
                    collections: 494.50204601e6,
                    withdrawals: 104.86301375e6,
                    withdrawalRate: 0.212,
                },
                collections: {
                    monthly: { Jan: 60e6, Feb: 75e6, Mar: 90e6, Apr: 120e6, May: 184.6e6, Jun: 150e6, Jul: 70e6 },
                    topPerformers: "MTN Mobile Money (24.97%) and MKOPA Ghana (15.85%) are the largest collectors. Pareto holds: 0.5% of merchants generate ~70% of revenue.",
                    seasonality: "Revenue climbed steadily from January, peaking strongly in May before easing in June and July."
                },
                withdrawals: {
                    methods: { bank: 82.3e6, momo: 27.6e6 },
                    peakMonth: "Withdrawals track collections, but with a low overall rate of 21%.",
                    behavior: "Bank transfers are the preferred method for withdrawals (75%). Wallets act as short-term pass-through accounts rather than for long-term float."
                },
                services: {
                    invoicing: 7,
                    sms: 5,
                    payments: 33,
                },
                insights: "This is the second-largest sector by merchant count but has a much lower total collection volume compared to the titans. The low withdrawal rate suggests funds are used for operational payments within the platform. There is significant untapped potential to activate this large merchant base and increase their average transaction value."
            },
            retail: {
                name: "Retail",
                overview: {
                    merchants: 1115,
                    collections: 985.97086645e6,
                    withdrawals: 428.68e6,
                    withdrawalRate: 0.4347,
                },
                collections: {
                    monthly: { Jan: 172.4883e6, Feb: 167.4526e6, Mar: 166.5246e6, Apr: 161.6385e6, May: 140.9364e6, Jun: 121.5872e6, Jul: 55.3433e6 },
                    topPerformers: "Highly concentrated with HomePro (20%), Labianca Group, and Somoco Ghana leading. The top 10 merchants account for 52% of collections.",
                    seasonality: "Collections showed a gentle decline through Q1 and Q2, though the daily run-rate in July suggests stabilization."
                },
                withdrawals: {
                    methods: { bank: 309e6, momo: 119.7e6 },
                    peakMonth: "Followed collection trends, with a notable rebound in March before softening in Q2.",
                    behavior: "Bank transfers are dominant for bulk settlements by larger retailers (72%), while MoMo is crucial for smaller or newer merchants. A significant 56.5% of funds are retained on-platform."
                },
                services: {
                    invoicing: 6.2,
                    sms: 3.5,
                    payments: 36,
                },
                insights: "The largest sector by merchant count, representing the 'long tail'. Revenue is highly concentrated among a few top performers. The high balance retention (56.5%) presents a major opportunity for float monetization and cross-selling payment services to the extensive merchant base."
            },
             healthcare: {
                name: "Healthcare & Wellness",
                overview: {
                    merchants: 349,
                    collections: 180.97803368e6,
                    withdrawals: 66.75416923e6,
                    withdrawalRate: 0.3688,
                },
                collections: {
                    monthly: { Jan: 27e6, Feb: 24.9e6, Mar: 27.5e6, Apr: 28.9e6, May: 29.6e6, Jun: 29.9e6, Jul: 15.5e6 },
                    topPerformers: "Top Up Pharmacy (11.5%), MDS-Lancet (8.7%), and Costa Pharmacy (8.6%) lead. The top 10 merchants drive 54% of collections.",
                    seasonality: "After a dip in February, collections grew steadily and remained stable through June, showing resilience."
                },
                withdrawals: {
                    methods: { bank: 56.09927211e6, momo: 10.65489712e6 },
                    peakMonth: "Withdrawals are consistent, with only 37% of collected funds being withdrawn.",
                    behavior: "Bank transfers are the primary method (84%) for settling with suppliers or managing clinic finances. The low withdrawal rate indicates significant funds are held on-platform for operational use."
                },
                services: {
                    invoicing: 2.9,
                    sms: 3.4,
                    payments: 25,
                },
                insights: "A stable and growing sector with high balance retention. USSD and Instore POS are key collection channels. Service adoption (Invoicing, SMS) is very low, presenting a clear opportunity for cross-selling to improve patient communication and billing efficiency."
            },
            transport: {
                name: "Transportation & Logistics",
                overview: {
                    merchants: 101,
                    collections: 106.743588e6,
                    withdrawals: 30.22966149e6,
                    withdrawalRate: 0.2832,
                },
                collections: {
                    monthly: { Jan: 15e6, Feb: 16e6, Mar: 17e6, Apr: 18e6, May: 18.5e6, Jun: 18.7e6, Jul: 7.5e6 },
                    topPerformers: "Intercity STC Coaches (14.1%), VDL Fulfilment (12.8%), and Speedaf Logistics (9.5%) are the main players.",
                    seasonality: "Collections peaked in May-June, coinciding with mid-year freight surges and passenger traffic."
                },
                withdrawals: {
                    methods: { bank: 22.803194e6, momo: 7.426468e6 },
                    peakMonth: "Withdrawals align with collection peaks.",
                    behavior: "Bank transfers handle the bulk of value (75%) for fleet and freight settlements, while MoMo is vital for frequent driver cash-outs."
                },
                services: {
                    invoicing: 7.9,
                    sms: 9.9,
                    payments: 49.5,
                },
                insights: "This sector shows a classic Pareto pattern, with 20% of merchants generating 75% of revenue. USSD is the workhorse, but there is growing adoption of online checkout solutions. Bulk payments are a key feature, with supplier payouts dominating."
            },
            food: {
                name: "Food & Beverage",
                overview: {
                    merchants: 413,
                    collections: 108.47449121e6,
                    withdrawals: 106.2e6,
                    withdrawalRate: 0.979,
                },
                collections: {
                    monthly: { Jan: 12.32e6, Feb: 11.85e6, Mar: 13.50e6, Apr: 15.75e6, May: 24.50e6, Jun: 21.75e6, Jul: 9.20e6 },
                    topPerformers: "PizzaMan ChickenMan Online (16.01%), PizzaMan ChickenMan 4 (4.84%), Hajia Sauda (4.57%). Top 20 merchants account for 54% of collections.",
                    seasonality: "Q2 (April–June) captures the bulk of collection growth, pointing to strong spring demand."
                },
                withdrawals: {
                    methods: { bank: 58.41e6, momo: 47.79e6 },
                    peakMonth: "May peak in transfers (₵24.45 M) closely mirrors the collections surge.",
                    behavior: "Most businesses withdraw >90% of collections made every month. High-value merchants prefer bank, smaller/frequent prefer MoMo. High correlation between collected and transferred amounts."
                },
                services: {
                    invoicing: 1.9,
                    sms: 0,
                    payments: 0,
                },
                insights: "High withdrawal velocity, with merchants rapidly sweeping funds. Strong correlation between collections and withdrawals. Invoicing and SMS are underutilized. Opportunity to optimize mobile money payouts for high-frequency merchants."
            },
            wholesale: {
                name: "Wholesale & Distribution",
                overview: {
                    merchants: 123,
                    collections: 156.94864243e6,
                    withdrawals: 66.40005558e6,
                    withdrawalRate: 0.423,
                },
                collections: {
                    monthly: { Jan: 16e6, Feb: 20e6, Mar: 27.41e6, Apr: 25e6, May: 25.3e6, Jun: 21.6e6, Jul: 9.97e6 },
                    topPerformers: "SoftCare FM Manufacturing (18%), Interplast (14%), Poly Tanks Gh Ltd (12%). Top 20% of merchants generate 95.7% of revenue.",
                    seasonality: "March–May are high-yield months; plan capacity and marketing pushes ahead of these peaks."
                },
                withdrawals: {
                    methods: { bank: 54.31e6, momo: 12.09e6 },
                    peakMonth: "Surges in Feb/Mar and Jun (mirrors collection peaks).",
                    behavior: "Bank is preferred for bulk settlement (82%). MoMo for smaller, frequent payouts (18%). High weekly cadence for active withdrawers."
                },
                services: {
                    invoicing: 3,
                    sms: 3,
                    payments: 32.5,
                },
                insights: "Extremely skewed distribution with a small elite cohort driving nearly all turnover. Heavy reliance on USSD for collections. High concentration of withdrawal volume. Significant whitespace for payroll and bulk-Excel payments."
            },
            government: {
                name: "Government & Non-Profit",
                overview: {
                    merchants: 205,
                    collections: 8.25865048523e9,
                    withdrawals: 11.489982e6,
                    withdrawalRate: 0.00139,
                },
                collections: {
                    monthly: { Jan: 1.76e9, Feb: 1.5e9, Mar: 1.3e9, Apr: 1.1e9, May: 1.0e9, Jun: 0.8e9, Jul: 0.43e9 },
                    topPerformers: "Electricity Company of Ghana (96.4%) and ECG – Non-Energy Services (3.1%) account for 99.6% of sector inflows.",
                    seasonality: "Peak month: January 2025 (GHS 1.76 bn) – driven by ECG. Gradual slide after May; July data shows seasonal dip."
                },
                withdrawals: {
                    methods: { bank: 10.16e6, momo: 1.33e6 },
                    peakMonth: "Withdrawals are only 0.14% of collections – funds largely retained or re-directed as internal payments.",
                    behavior: "Bank transfers preferred for large civic payouts (88.5%). MoMo used for micro-grants and stipend schemes (11.5%). Funds largely retained on platform."
                },
                services: {
                    invoicing: 2,
                    sms: 4,
                    payments: 25,
                },
                insights: "Extremely high revenue concentration driven by ECG. Funds are largely retained on the platform (very low withdrawal rate). Opportunities for tailored treasury solutions and internal payment automation."
            },
            realestate: {
                name: "Real Estate & Property Management",
                overview: {
                    merchants: 110,
                    collections: 39.52049112e6,
                    withdrawals: 23.943241e6,
                    withdrawalRate: 0.6058,
                },
                collections: {
                    monthly: { Jan: 8.61e6, Feb: 7.5e6, Mar: 6.8e6, Apr: 5.5e6, May: 4.5e6, Jun: 3.9e6, Jul: 2.13e6 },
                    topPerformers: "Reiss and Co Ghana 2 (16%), BridgeView Resort (14%), Evandy Estates (10%). Top-5 merchants command 56% of sector inflows.",
                    seasonality: "Peak month: January 2025. Revenues dipped steadily after March."
                },
                withdrawals: {
                    methods: { bank: 18.85e6, momo: 5.09e6 },
                    peakMonth: "Withdrawals track collections, with ≈ 61% of collections withdrawn.",
                    behavior: "Bank transfers dominant for lump-sum sweeps (79%). MoMo for frequent micro-withdrawals (21%). Most funds exit quickly."
                },
                services: {
                    invoicing: 8,
                    sms: 5,
                    payments: 28,
                },
                insights: "High withdrawal rate, with most funds swept quickly. Top-5 merchants drive over half of collections. Opportunities for upsell of unified checkout and online gateways, and early adoption of bulk payment tools."
            },
            education: {
                name: "Education & Training",
                overview: {
                    merchants: 182,
                    collections: 30.08697579e6,
                    withdrawals: 13.91e6,
                    withdrawalRate: 0.462,
                },
                collections: {
                    monthly: { Jan: 5.08e6, Feb: 4.28e6, Mar: 4.14e6, Apr: 4.64e6, May: 5.26e6, Jun: 4.59e6, Jul: 2.11e6 },
                    topPerformers: "Chafas Institute (27.4%), Rockies International School (12.8%), Heritage Christian University College (8.2%). Top 13 schools (7% of cohort) generate 71.6% of revenue.",
                    seasonality: "Collections show two mini-peaks—January (new-term fees) and May–June (mid-year tuition)."
                },
                withdrawals: {
                    methods: { bank: 10.50e6, momo: 3.40e6 },
                    peakMonth: "Withdrawals track collection peaks, with 46.1% of collections withdrawn.",
                    behavior: "Bank transfers preferred for large settlements (75.5%). MoMo for frequent, lower-value payouts (24.5%). High-frequency schools merit automated withdrawal scheduling."
                },
                services: {
                    invoicing: 6.0,
                    sms: 15.4,
                    payments: 30.8,
                },
                insights: "Seasonal collection peaks. High revenue concentration among a few schools. USSD is the primary channel. Opportunities for promoting automated withdrawal scheduling, payroll solutions, and interest-bearing sub-wallets."
            },
            travel: {
                name: "Travel & Tourism",
                overview: {
                    merchants: 43,
                    collections: 26.14054414e6,
                    withdrawals: 19.10e6,
                    withdrawalRate: 0.730,
                },
                collections: {
                    monthly: { Jan: 3.85e6, Feb: 3.14e6, Mar: 3.71e6, Apr: 4.32e6, May: 4.59e6, Jun: 4.56e6, Jul: 1.97e6 },
                    topPerformers: "Wakanow (44.8%), Adansi Travels (18.7%), Lamaira Travel & Tour (11.1%). Top-5 concentration is 88.6% of value.",
                    seasonality: "Collections peak in April–June (pre-summer travel)."
                },
                withdrawals: {
                    methods: { bank: 9.91e6, momo: 9.19e6 },
                    peakMonth: "Withdrawal spikes coincide with collection highs (Mar, May, Jun).",
                    behavior: "Most operators zero-out their balance shortly after funds arrive (58.8% full cash-out). Mobile-money is near parity with bank deposits (48% of value)."
                },
                services: {
                    invoicing: 12,
                    sms: 0,
                    payments: 49,
                },
                insights: "High settlement intensity, with most funds withdrawn quickly. Mobile Money is a significant withdrawal channel. Extreme concentration risk among top operators. Opportunities for treasury-yield products and automated bill payments."
            },
            construction: {
                name: "Construction & Contracting",
                overview: {
                    merchants: 27,
                    collections: 22.32318133e6,
                    withdrawals: 18.58190282e6,
                    withdrawalRate: 0.8324,
                },
                collections: {
                    monthly: { Jan: 3.5e6, Feb: 2.89e6, Mar: 4.11e6, Apr: 3.6e6, May: 3.83e6, Jun: 3.0e6, Jul: 1.39e6 },
                    topPerformers: "SagAn Limited (33.9%), Wax Bon Builders Shop (18.3%), King Of The Universe (13.8%). Top 20% (6/27) contribute ~75% of collections.",
                    seasonality: "Peak Months: March and May, aligning with project milestones."
                },
                withdrawals: {
                    methods: { bank: 6.90715551e6, momo: 11.67474731e6 },
                    peakMonth: "Withdrawals track collections, with 83.2% of collections liquidated.",
                    behavior: "MoMo dominates by frequency (63%) for day-to-day cash-out. Bank preferred for large project-stage transfers (37%). High cash-out rate."
                },
                services: {
                    invoicing: 3.7,
                    sms: 3.7,
                    payments: 30,
                },
                insights: "Very high withdrawal rate, with most funds swept quickly. USSD is primary collection channel. Opportunities for upsell of unified checkout, online gateways, and bulk payment tools (employee/supplier/Excel)."
            },
            events: {
                name: "Events & Ticketing",
                overview: {
                    merchants: 30,
                    collections: 1.03284880e6,
                    withdrawals: 0.83053166e6,
                    withdrawalRate: 0.804,
                },
                collections: {
                    monthly: { Jan: 0.1e6, Feb: 0.1e6, Mar: 0.15e6, Apr: 0.15e6, May: 0.2e6, Jun: 0.25e6, Jul: 0.08e6 },
                    topPerformers: "Goldenglow Events (41.71%), CreamyBytes (23.07%), Bluewuy Business Consultancy (9.01%). 20% of merchants drive 80% of collections.",
                    seasonality: "Peak Months: June, May. Low activity for most merchants."
                },
                withdrawals: {
                    methods: { bank: 0.498e6, momo: 0.332e6 },
                    peakMonth: "Most businesses withdraw >90% of collections made every month.",
                    behavior: "Most businesses withdraw >90% of collections made every month. High-Volume Merchants: Weekly withdrawals. Bank preferred for large amounts, MoMo for smaller, frequent withdrawals."
                },
                services: {
                    invoicing: 7.1,
                    sms: 0,
                    payments: 26.7,
                },
                insights: "Revenue is highly concentrated among a few top performers. Merchants exhibit rapid withdrawal patterns. SMS and invoicing services are significantly underutilized, representing clear growth opportunities."
            },
        };

        let monthlyChart = null;
        let methodsChart = null;
        let servicesChart = null;

        const formatCurrency = (value) => {
            if (value >= 1e9) return `GHS ${(value / 1e9).toFixed(2)}B`;
            if (value >= 1e6) return `GHS ${(value / 1e6).toFixed(2)}M`;
            if (value >= 1e3) return `GHS ${(value / 1e3).toFixed(2)}K`;
            return `GHS ${value.toFixed(2)}`;
        };

        const renderDashboard = (sectorKey) => {
            const data = sectorData[sectorKey];
            if (!data) return;

            const dashboardEl = document.getElementById('dashboard-content');
            dashboardEl.innerHTML = `
                <h2 class="text-3xl font-bold mb-6 text-[#003366]">${data.name}</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div class="card text-center">
                        <div class="text-3xl font-bold text-[#FF8C00]">${data.overview.merchants}</div>
                        <div class="text-sm font-semibold text-gray-500 mt-1">Total Merchants</div>
                    </div>
                    <div class="card text-center">
                        <div class="text-3xl font-bold text-[#FF8C00]">${formatCurrency(data.overview.collections)}</div>
                        <div class="text-sm font-semibold text-gray-500 mt-1">Total Collections</div>
                    </div>
                    <div class="card text-center">
                        <div class="text-3xl font-bold text-[#FF8C00]">${formatCurrency(data.overview.withdrawals)}</div>
                        <div class="text-sm font-semibold text-gray-500 mt-1">Total Withdrawals</div>
                    </div>
                    <div class="card text-center">
                        <div class="text-3xl font-bold text-[#FF8C00]">${(data.overview.withdrawalRate * 100).toFixed(1)}%</div>
                        <div class="text-sm font-semibold text-gray-500 mt-1">Withdrawal Rate</div>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
                    <div class="lg:col-span-3 card">
                        <h3 class="text-xl font-bold mb-4 text-[#003366]">Monthly Trends (Jan-Jul 2025)</h3>
                        <div class="chart-container"><canvas id="monthly-chart"></canvas></div>
                    </div>
                    <div class="lg:col-span-2 card flex flex-col">
                         <h3 class="text-xl font-bold mb-4 text-[#003366]">Withdrawal Methods</h3>
                         <div class="donut-chart-container flex-grow"><canvas id="methods-chart"></canvas></div>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div class="card">
                        <h3 class="text-xl font-bold mb-4 text-[#003366]">Service Adoption</h3>
                         <div class="radar-chart-container"><canvas id="services-chart"></canvas></div>
                    </div>
                    <div class="card">
                        <h3 class="text-xl font-bold mb-4 text-[#003366]">Key Insights</h3>
                        <div class="space-y-4 text-gray-700">
                            <div><p><strong class="text-gray-800">Top Performers:</strong> ${data.collections.topPerformers}</p></div>
                            <div><p><strong class="text-gray-800">Seasonality:</strong> ${data.collections.seasonality}</p></div>
                            <div><p><strong class="text-gray-800">Withdrawal Behavior:</strong> ${data.withdrawals.behavior}</p></div>
                            <div><p><strong class="text-gray-800">Strategic Summary:</strong> ${data.insights}</p></div>
                        </div>
                    </div>
                </div>
            `;

            createCharts(data);
            
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
                if (item.dataset.sector === sectorKey) {
                    item.classList.add('active');
                }
            });
        };

        const createCharts = (data) => {
            if (monthlyChart) monthlyChart.destroy();
            monthlyChart = new Chart(document.getElementById('monthly-chart'), {
                type: 'bar',
                data: {
                    labels: Object.keys(data.collections.monthly),
                    datasets: [
                        {
                            label: 'Collections',
                            data: Object.values(data.collections.monthly),
                            backgroundColor: '#33CC33', /* Hubtel Green */
                            borderColor: '#00B300', /* Darker Green */
                            borderWidth: 1
                        },
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: { y: { beginAtZero: true, ticks: { callback: (val) => formatCurrency(val) } } },
                    plugins: { legend: { display: false } }
                }
            });

            if (methodsChart) methodsChart.destroy();
            methodsChart = new Chart(document.getElementById('methods-chart'), {
                type: 'doughnut',
                data: {
                    labels: ['Bank', 'Mobile Money'],
                    datasets: [{
                        data: [data.withdrawals.methods.bank, data.withdrawals.methods.momo],
                        backgroundColor: ['#003366', '#FFD700'], /* Hubtel Dark Blue, Hubtel Yellow */
                        borderColor: '#ffffff',
                        borderWidth: 4,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: 'bottom' },
                        tooltip: { callbacks: { label: (c) => `${c.label}: ${formatCurrency(c.raw)}` } }
                    }
                }
            });

            if (servicesChart) servicesChart.destroy();
            servicesChart = new Chart(document.getElementById('services-chart'), {
                type: 'bar', /* Changed from radar to bar */
                data: {
                    labels: ['Invoicing', 'SMS', 'Payments'],
                    datasets: [{
                        label: 'Adoption Rate (%)',
                        data: [data.services.invoicing, data.services.sms, data.services.payments],
                        backgroundColor: ['#FF8C00', '#33CC33', '#003366'], /* Hubtel Orange, Green, Dark Blue */
                        borderColor: ['#CC7000', '#00B300', '#002244'], /* Darker shades for border */
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            beginAtZero: true,
                            grid: { color: '#e6f0f5' },
                            ticks: { color: '#333333' }
                        },
                        y: {
                            beginAtZero: true,
                            grid: { color: '#e6f0f5' },
                            ticks: {
                                callback: function(value) { return value + '%'; },
                                color: '#333333'
                            },
                            title: { display: true, text: 'Adoption Rate (%)', color: '#003366' }
                        }
                    },
                    plugins: { legend: { display: false } }
                }
            });
        };

        const init = () => {
            const navEl = document.getElementById('sector-nav');
            // Main Focus Areas
            ['gaming', 'financial', 'professional', 'retail', 'healthcare', 'transport', 'food', 'wholesale'].forEach(key => {
                const item = document.createElement('div');
                item.className = 'nav-item';
                item.textContent = sectorData[key].name;
                item.dataset.sector = key;
                item.addEventListener('click', () => renderDashboard(key));
                navEl.appendChild(item);
            });

            // Other Sectors (grouped under a heading)
            const otherHeading = document.createElement('h3');
            otherHeading.className = 'text-lg font-bold text-[#003366] mt-6 mb-2';
            otherHeading.textContent = 'Other Sectors';
            navEl.appendChild(otherHeading);

            ['government', 'realestate', 'education', 'travel', 'construction', 'events'].forEach(key => {
                const item = document.createElement('div');
                item.className = 'nav-item';
                item.textContent = sectorData[key].name;
                item.dataset.sector = key;
                item.addEventListener('click', () => renderDashboard(key));
                navEl.appendChild(item);
            });

            renderDashboard('gaming'); // Default view
        };

        init();