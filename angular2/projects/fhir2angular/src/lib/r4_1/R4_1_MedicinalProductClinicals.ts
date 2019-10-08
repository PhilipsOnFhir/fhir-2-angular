import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_MedicinalProductClinicals_Contraindication } from './R4_1_MedicinalProductClinicals_Contraindication'
import { R4_1_MedicinalProductClinicals_Interactions } from './R4_1_MedicinalProductClinicals_Interactions'
import { R4_1_MedicinalProductClinicals_TherapeuticIndication } from './R4_1_MedicinalProductClinicals_TherapeuticIndication'
import { R4_1_MedicinalProductClinicals_UndesirableEffects } from './R4_1_MedicinalProductClinicals_UndesirableEffects'

export class R4_1_MedicinalProductClinicals      extends R4_1_DomainResource
{

   static def : string = 'MedicinalProductClinicals';
   undesirableEffects : R4_1_MedicinalProductClinicals_UndesirableEffects [];
   therapeuticIndication : R4_1_MedicinalProductClinicals_TherapeuticIndication [];
   contraindication : R4_1_MedicinalProductClinicals_Contraindication [];
   interactions : R4_1_MedicinalProductClinicals_Interactions [];
}
