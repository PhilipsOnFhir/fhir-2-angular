import { R5_DomainResource } from './R5_DomainResource'
import { R5_MedicinalProductClinicals_Contraindication } from './R5_MedicinalProductClinicals_Contraindication'
import { R5_MedicinalProductClinicals_Interactions } from './R5_MedicinalProductClinicals_Interactions'
import { R5_MedicinalProductClinicals_TherapeuticIndication } from './R5_MedicinalProductClinicals_TherapeuticIndication'
import { R5_MedicinalProductClinicals_UndesirableEffects } from './R5_MedicinalProductClinicals_UndesirableEffects'

export class R5_MedicinalProductClinicals      extends R5_DomainResource
{

   static def : string = 'MedicinalProductClinicals';
   undesirableEffects : R5_MedicinalProductClinicals_UndesirableEffects [];
   therapeuticIndication : R5_MedicinalProductClinicals_TherapeuticIndication [];
   contraindication : R5_MedicinalProductClinicals_Contraindication [];
   interactions : R5_MedicinalProductClinicals_Interactions [];
}
